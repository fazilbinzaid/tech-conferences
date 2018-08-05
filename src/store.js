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

import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducer from './reducers'
import mySaga from './sagas'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)

// then run the saga
sagaMiddleware.run(mySaga)




import { createLogger } from 'redux-logger';

import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import mySaga from '../sagas/';

import rootReducer from './modules';
// // import DevTools from '../containers/Root/DevTools';


  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  

const sagaMiddleware = createSagaMiddleware()


export default function configureStore(initialState, history) {
    const logger = createLogger();

    // Build the middleware for intercepting and dispatching navigation actions
    const reduxRouterMiddleware = routerMiddleware(history);

    const middleware = applyMiddleware(sagaMiddleware , logger, reduxRouterMiddleware);

    // const middlewareWithDevTools = compose(
    //     middleware,
    //     DevTools.instrument()
    // );

    // if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  
// }


    // Add the reducer to your store on the `router` key
    // Also apply our middleware for navigating
    const store = createStore(rootReducer, initialState, middlewareWithDevTools,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        );

    if (module.hot) {
        module.hot
            .accept('../reducers', () => {
                const nextRootReducer = require('../reducers/index'); // eslint-disable-line global-require

                store.replaceReducer(nextRootReducer);
            });
    }

    sagaMiddleware.run(mySaga)
    return store;
}
