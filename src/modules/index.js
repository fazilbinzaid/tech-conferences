import { combineReducers } from 'redux'
import counter from './counter'
import tableReducer from './tableReducer'

export default combineReducers({
  counter,
  tableReducer
})
