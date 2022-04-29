# Getting Started with Running Pollen Patrol

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## App Description
Our pollen app is designed to help people stay on top of their seasonal allergies by providing them with a comprehensive pollen report for a given area. Users are able to create an account and view all this information for their saved location in a dashboard which displays this information graphically as well as breaks down the top allergens at that given moment. Users are able to update their location and delete their account should they no longer wish to use it. 

This project was made using React + Firebase/Firestore. It was a great learning opportunity for us & we hope you enjoy our result!

Note: If you are having trouble running, or do not wish to set up an account for the API and Firebase/Firestore, please reach out and we can provide our .env file!
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser. Here you can see the landing page where an account can log in or a new account can be created to view pollen levels at their inputted location. 

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Setting up Firebase + Firestore

Head to the firebase website to sign up and create a new free project. After you have created a new project we need to setup the authentication. Make sure your project is a web app and head over to the tab for "Sign in Method." Then, you want to enable email/password sign in. Now, we want to create a Firestore database to correspond with this authetication data. First setup a realtime database in production mode. There is no changes or rules to be changed here. Create a firestore database in production mode and then setup two collection fields. 

Start a collection called logs and auto-assign an ID. Create two fields called action and user. 
Start a second collection called users with fields location and name.

One last rule change needs to be made to allow entries in the database. Go to the rules page under the firestore database and change line 5 from `allow read, write: if false;` to `allow read, write: if true;`

![Screenshot](./public/firestore_database.jpg)

## Setting API keys for Ambee and Firebase

All we need to do to setup API keys is to create a folder in root called env and add your Ambee and firebase API keys to this file. After creating an Ambee account, declare your API key like `REACT_APP_AMBEE_API_KEY`. Then go to your firestore database and get your API key under project settings. Paste only the `const firebaseconfig` part, as seen below, from your database into the same env folder and you're good to go. 

![Screenshot](./public/FirebaseAPI.jpg)

### NOTE

If you are making your own changes to this repository make sure that you do not push any personal API keys that you may be using. Specfically, make sure you include the environment folder that was just created to your .gitignore file to ensure your API keys are not exposed. 

## Dependencies

- @material-ui/core
- @testing-library/jest-dom
- @testing-library/react
- @testing-library/user-event
- better-sqlite3
- eslint-plugin-flowtype
- firebase
- formik
- morgan
- react
- react-dom
- react-easy-bar-chart
- react-router-dom
- react-scripts
- style-components
- web-vitals

Run npm install to install all of these dependencies. 


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
