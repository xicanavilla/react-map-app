import React, { Component } from 'react';
import './App.css';

import locations from './data/locations.json';
import MapDisplay from './components/MapDisplay';


class App extends Component {
  state = {
    lat: 40.736325,
    lon: -74.167025,
    zoom: 13,
    all: locations
  }

  render = () => {
    return (
      <div className="App">
        <div>
          <h1>Newark, NJ</h1>
        </div>
        <MapDisplay
          lat = {this.state.lat}
          lon = {this.state.lon}
          zoom = {this.state.zoom}
          location = {this.state.all}/>
      </div>
    );
  }
}

export default App;
