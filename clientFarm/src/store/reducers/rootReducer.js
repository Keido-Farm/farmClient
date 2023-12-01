import {combineReducers} from "redux";
import farmReducer from './farmsReducer'
import periodReducer from './periodReducer'
import weeklyReducer from './weeklyReducer'
const rootReducer = combineReducers({
  farms: farmReducer,
  periodData: periodReducer,
  weekData: weeklyReducer
})


export default rootReducer