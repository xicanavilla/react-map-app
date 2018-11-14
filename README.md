
## Overview
This project uses React along with a Foursquare and Google Maps API. External dependencies include:
* Google Maps
* Foursquare
* Font Awesome
* React Material-UI
* google-maps-react

## Features
The map includes some of my favorite places to eat lunch in Newark, NJ. These locations are stored in a list and displayed through markers on the map. When you click on a marker, an info box will appear with the restaurant name, website, and picture from foursquare (if available).

The list is able to be filtered by clicking the hamburger icon on the top left. A drawer will appear with a text input box at the top. Typing into the box will filter accordingly. Selecting a restaurant in the list, activates the marker and closes the drawer.

The standard create react app service worker has been enabled. It's only enabled when running a production build, it won't be available during review.

## Setup

* Clone repo from https://github.com/xicanavilla/react-map-app.git
* Run npm install
* Run npm start
* Run npm start 
