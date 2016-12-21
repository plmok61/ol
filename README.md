#OL
This app was built using React on the front end and Node/Express on the back end.

##Getting Started
Simply clone down the repo and run
```
npm install
```
Then you can start up the server on port 8081 with
```
npm start
```
The server uses `nodemon` which automatically restarts the server for you any time server code is edited.

##Webpack
Webpack is used to bundle the app. For development you can run
```
npm run dev
```
This will start up the Webpack dev server on port 8080. The dev server allows you to make changes to your React code and see them on screen by refreshing the page. If you chose not to use the dev server, you will need to run `npm run webpack` any time you wish to see changes to your React code.

##Tests
This app uses `jest` as the testing suite.
```
npm test
```