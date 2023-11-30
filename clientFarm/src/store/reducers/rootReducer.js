import {combineReducers} from "redux";
import farmReducer from './farmsReducer'
import periodReducer from './periodReducer'
const rootReducer = combineReducers({
  farms: farmReducer,
  periodData: periodReducer
})


export default rootReducer