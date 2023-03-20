import counterReducer from './counterReducer'
import addUserReducer from './addUserReducer'
import {combineReducers} from 'redux'
const allReducers = combineReducers({
    counter: counterReducer,
    addUserReducer:addUserReducer
})
export default allReducers