

## About
Displays Image gallery using imgur api. 
Its a Simple web app that allows one to browse the Imgur gallery using https://api.imgur.com/.
React with redux pattern in the Front end and Express.js in the backend. 
Instead of calling Imgur API directly, API calls are proxied through Node/express server.

## How to get started 
1. Clone the repo.
2. go to the project folder and type 'npm install' in terminal to install all the dependencies.
3. 'npm run start-server' to start the backend server.
4. Once the backend is up , 'npm start' to start the Client app  

## Start Backend server 
### `npm run start:server`
starts the node server.js on 5000

## Start Client side  
### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.


## Set IMGUR client ID

Set imgur client ID here: /backend/constants/constants

IF you dont have one , you can create here:  http://api.imgur.com/oauth2/addclient

## Available Scripts

In the project directory, you can run:

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

## Screens
![grab-landing-page](https://github.com/rakeshkesavan/imgurapp/blob/master/common/screen/screencast-localhost-3000-2018.12.02-08-17-56.gif)


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
