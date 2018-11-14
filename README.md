
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

The standard create react app service worker has been enabled. The service worker will only work in production build, not in development mode. You can run the app in production build by running `npm run build` and `server -s` build then visit `localhost:5000` in your browser.


## Setup

* Clone repo from https://github.com/xicanavilla/react-map-app.git
* Run npm install
* Run npm start

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
 The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
