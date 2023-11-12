import {combineReducers} from "redux";
import itemReducer from './itemsReducer'
import categoryReducer from './categoriesReducer'
const rootReducer = combineReducers({
  items: itemReducer,
  categories: categoryReducer
})


export default rootReducer