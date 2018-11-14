import React, { Component } from 'react';
import './App.css';

import locations from './data/locations.json';
import MapDisplay from './components/MapDisplay';
import ListDrawer from './components/ListDrawer';

class App extends Component {
  state = {
    lat: 40.736325,
    lon: -74.167025,
    zoom: 13,
    all: locations,
    open: false
  }

  styles = {
    menuButton: {
      marginLeft: 10,
      marginRight: 20,
      position: "absolute",
      left:10,
      top:20,
      background:"white",
      padding:10
    },
    hide: {
      display: 'none'
    },
    header:{
      marginTop:'0px'
    }
  };

  toggle = () => {
    this.setState({
      open: !this.state.open
    });
  }

  render = () => {
    return (
      <div className="App">
        <div>
          <button onClick={this.toggle} style={this.styles.menuButton}>
            <i className="fa fa-bars"></i>
          </button>
          <h1>Newark, NJ</h1>
        </div>
        <MapDisplay
          lat = {this.state.lat}
          lon = {this.state.lon}
          zoom = {this.state.zoom}
          locations = {this.state.all} />
        <ListDrawer
          locations={this.state.all}
          open={this.state.open}
          toggle={this.toggle} />
      </div>
    );
  }
}

export default App;
