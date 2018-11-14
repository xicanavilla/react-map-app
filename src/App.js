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
    filtered:null,
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

  componentDidMount = () => {
    this.setState({
      ...this.state,
      filtered:this.filterLocations(this.state.all, "")
    });
  }

  toggle = () => {
    this.setState({
      open: !this.state.open
    });
  }

  updateQuery = (query) => {
    this.setState({
      ...this.state,
      selectedIndex:null,
      filtered: this.filterLocations(this.state.all, query)
    });
  }

  filterLocations = (locations, query) => {
    //Location filter which matches query string
    return locations.filter(location => location.name.toLowerCase().includes(query.toLowerCase()));
  }

  clickListItem = (index) => {
    //Sets state to reflect the selected location array index
      this.setState({selectedIndex:index, open: !this.state.open})
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
          locations = {this.state.filtered}
          clickListItem = {this.clickListItem}
          selectedIndex = {this.state.selectedIndex} />
        <ListDrawer
          locations = {this.state.filtered}
          open = {this.state.open}
          toggle = {this.toggle}
          filterLocations = {this.updateQuery}
          clickListItem = {this.clickListItem} />
      </div>
    );
  }
}

export default App;
