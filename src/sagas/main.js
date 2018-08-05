import createSagaMiddleware from 'redux-saga'
import configureStore as store  from '../store';

import mySaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
sagaMiddleware.run(mySaga)

const action = type => store.dispatch({type})
