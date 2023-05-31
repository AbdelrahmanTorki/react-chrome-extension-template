# React Chrome Extension Template
## Description
Template starter code for building chrome extension UI using react. 
## Content
The `public` folder contains the `manifest.json`, `content-scripts` and `service-workers`.

The `src` folder contains `index.js` file for loading popup page, `home.js` file for loading home page and other components.

The `scripts` folder at the root directory contains `build.js`, `start.js` and `test.js` scripts, the folder is a result of ejecting the react app, you don't need to modify any of them to build the chrome extension unless you have to and know that your changes won't affect your project, [More on Ejecting react app](https://create-react-app.dev/docs/available-scripts/#npm-run-eject).
## Development 
To get started, clone the project and run `npm install`.

For developing the popup and home UI, run `npm run start` and navigate to [http://localhost:3000](http://localhost:3000) for **index.html** (popup page) and [http://localhost:3000/home.html](http://localhost:3000/home.html) for **home.html** page. 

Chrome extensions API won't work in local development, so it's useful for only developing the UI, to test chrome API code changes, you'll need to rebuild the extension.
## Loading the extension
To load the extension, run `npm run build` in the command line, then go to `chrome menu > More tools > Extensions > Load unpacked`, then select the created build folder.

For further changes, all you need is to rerun the build command and the changes will be reflected except for changes in the `manifest.json` and other files in the public directory, you'll need to click on the reload icon on the extension card in the Extensions page for changes to take effect.

> The extnesion template also works in other browsers .e.g. Firefox, Microsoft Edge.
