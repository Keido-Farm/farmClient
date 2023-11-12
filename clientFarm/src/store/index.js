import { applyMiddleware, legacy_createStore as createStore} from "redux";
import rootReducer from "./reducers/rootReducer";
import logger from "./middlewares/logger";
import thunk from 'redux-thunk' //middleware so you can send functions

const store = createStore(rootReducer,applyMiddleware(thunk))//applyMiddleware(logger)); uncomment to apply middleware

export default store