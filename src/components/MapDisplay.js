import React, { Component } from 'react';
import {Map, InfoWindow, GoogleApiWrapper} from "google-maps-react";

const MAP_KEY = "AIzaSyCORbF8B4Q4nTeYvzvOK1jKW7u6XAAljtE";
const FS_CLIENT = "ZH10SZYREQM1CPGJAXD3UGNGWRPJ131KRHIVSNDCLGEH22RQ";
const FS_SECRET = "BTCM4EABEWWHB3KABQI5LJR4C4EZ4K3ZC5EXX4DSSGZEQVE5";
const FS_VERSION = "20180323";

class MapDisplay extends Component {
  state = {
    map: null,
    markers: [],
    markerProps: [],
    activeMarker: null,
    activeMarkerProps: null,
    showingInfoWindow: false
  };

  componentDidMount = () => {

  }

  mapReady = (props, map) => {
    this.setState({map});
    this.updateMarkers(this.props.locations);
  }

  closeInfoWindow = () => {
    this.state.activeMarker && this
      .state
      .activeMarker
      .setAnimation(null);
    this.setState({showingInfoWindow: false, activeMarker:null, activeMarkerProps:null});
  }

  getBusinessInfo = (props, data) => {
    return data
      .response
      .venues
      .filter(item => item.name.includes(props.name) || props.name.includes(item.name));
  }

  onMarkerClick = (props, marker, e) => {
    //closes any info window that is open
    this.closeInfoWindow();

    let url = `https://api.foursquare.com/v2/venues/search?client_id=${FS_CLIENT}&client_secret=${FS_SECRET}&v=${FS_VERSION}&radius=100&ll=${props.position.lat},${props.position.lng}&llAcc=100`;
    let headers = new Headers();
    let request = new Request(url, {
      method: 'GET',
      headers
    });

    let activeMarkerProps;
    fetch(request)
      .then(response => response.json())
      .then(result => {
        let restaurant = this.getBusinessInfo(props, result);
        activeMarkerProps = {
          ...props,
          foursquare:restaurant[0]
        };

        if(activeMarkerProps.foursquare) {
          let url = `https://api.foursquare.com/v2/venues/${restaurant[0].id}/photos?client_id=${FS_CLIENT}&client_secret=${FS_SECRET}&v=${FS_VERSION}`;
          fetch(url)
            .then(response => response.json())
            .then(result => {
              activeMarkerProps = {
                ...activeMarkerProps,
                images:result.response.photos
              };
              if(this.state.activeMarker)
                this.state.activeMarker.setAnimation(null);
              marker.setAnimation(this.props.google.maps.Animation.BOUNCE);
              this.setState({showingInfoWindow: true, activeMarker:marker, activeMarkerProps});
            })
        }
            else {
              marker.setAnimation(this.props.google.maps.Animation.BOUNCE);
              this.setState({showingInfoWindow: true, activeMarker:marker, activeMarkerProps:props});
            }
      })
    }

  // var marker = new window.google.maps.Marker({
  //     position: {lat: -34.397, lng:150.644},
  //     map: map,
  //     title: 'Hello World!'
  //   });

  updateMarkers = (locations) => {
    if(!locations)
      return;

    //clears map by removing markers
    this
      .state
      .markers
      .forEach(marker => marker.setMap(null));

    let markerProps = [];
    let markers = locations.map((location,index) => {
      let mProps = {
        key: index,
        index,
        name: location.name,
        position: location.pos,
        url: location.url
      };
      markerProps.push(mProps);

      let animation = this.props.google.maps.Animation.DROP;
      let marker = new this.props.google.maps.Marker({
          position: location.pos,
          map: this.state.map,
          animation
      });
      marker.addListener('click', () => {
        this.onMarkerClick(mProps, marker, null);
      });
      return marker;
    })
    this.setState({markers, markerProps});
  }

  render = () => {
    const style = {
      width: '100%',
      height: '100%'
    }

    const center = {
      lat: this.props.lat,
      lng: this.props.lon
    }

    let amProps = this.state.activeMarkerProps;

    return (
      <Map
        role="application"
        aria-label="map"
        onReady={this.mapReady}
        google={this.props.google}
        zoom={this.props.zoom}
        style={style}
        initialCenter={center}
        onClick={this.closeInfoWindow}>
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.closeInfoWindow}>
          <div>
            <h3>{amProps && amProps.name}</h3>
            {amProps && amProps.url
              ? (
                <a href={amProps.url}>See Website</a>
              )
              : ""}
          </div>
        </InfoWindow>
      </Map>
    )
  }
}

export default GoogleApiWrapper({apiKey: MAP_KEY})(MapDisplay)
