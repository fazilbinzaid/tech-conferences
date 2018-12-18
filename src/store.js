// import { createStore, applyMiddleware, compose } from 'redux'
// import createSagaMiddleware from 'redux-saga'
// import { connectRouter, routerMiddleware } from 'connected-react-router'
// import thunk from 'redux-thunk'
// import createHistory from 'history/createBrowserHistory'
// import rootReducer from './modules'
// import mySaga from './sagas'

// export const history = createHistory()

// const initialState = {}
// const enhancers = []
// // const middleware = [thunk, routerMiddleware(history)]

// const middleware = createSagaMiddleware()

// if (process.env.NODE_ENV === 'development') {
//   const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

//   if (typeof devToolsExtension === 'function') {
//     enhancers.push(devToolsExtension())
//   }
// }

// const composedEnhancers = compose(
//   applyMiddleware(...middleware),
//   ...enhancers
// )

// // middleware.run(mySaga)

// const action = type => store.dispatch({type})

// export default createStore(
//   connectRouter(history)(rootReducer),
//   initialState,
//   composedEnhancers
// )

/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

// import thunk from 'redux-thunk';

// import { createStore, applyMiddleware } from 'redux'
// import createSagaMiddleware from 'redux-saga'

// import reducer from './reducers'
// import mySaga from './sagas'

// // create the saga middleware
// const sagaMiddleware = createSagaMiddleware()
// // mount it on the Store
// const store = createStore(
//   reducer,
//   applyMiddleware(sagaMiddleware)
// )

// // then run the saga
// sagaMiddleware.run(mySaga)

// import { createLogger } from "redux-logger";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
// import { routerMiddleware } from "react-router-redux";
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import { reduxFirestore, firestoreReducer } from "redux-firestore";
import thunk from "redux-thunk";
// import { createBrowserHistory } from "history";
// import createSagaMiddleware from "redux-saga";
import firebase from "firebase";

import "firebase/firestore";
// import mySaga from "./sagas";
import FirebaseConfig from "./config/keys";
import counter from "./modules/counter";
import tableReducer from "./modules/tableReducer";
import snackbarReducer from "./modules/snackbarReducer";

// const sagaMiddleware = createSagaMiddleware();

// Create the history object
// const history = createBrowserHistory();

// export default function configureStore(initialState, history) {

//BEGIN FIREBASE PREREQUISITE
firebase.initializeApp(FirebaseConfig);

//react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  useFireStoreForProfile: true
};

//initialize Firestore
const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
  reduxFirestore(firebase) // <- needed if using firestore
)(createStore);

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer, // <- needed if using firestore
  counter,
  table: tableReducer,
  snackbar: snackbarReducer
});
//END FIREBASE PREREQUISITE

// const logger = createLogger();

// Build the middleware for intercepting and dispatching navigation actions
// const reduxRouterMiddleware = routerMiddleware(history);

const middleware = applyMiddleware(
  // sagaMiddleware,
  //   logger,
  // reduxRouterMiddleware,
  thunk
);

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
// const store = createStore(rootReducer, initialState, middlewareWithDevTools,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     );
const initialState = {};

//Use compose in case of absence of Redux DevTools
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  composeEnhancers(reactReduxFirebase(firebase), middleware)
);
// if (module.hot) {
//   module.hot.accept("../reducers", () => {
//     const nextRootReducer = require("../reducers/index"); // eslint-disable-line global-require

//     store.replaceReducer(nextRootReducer);
//   });
// }
// sagaMiddleware.run(mySaga);

export default store;
// }
