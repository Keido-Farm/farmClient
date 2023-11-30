import {
  PERIODS_FETCH_REQUEST,
  PERIODS_FETCH_SUCCESS,
  PERIODS_FETCH_FAILED,
} from "../actions/actionType";

const initialState = {
  farmDetails:{},
  periods:[],
  error:'',
  loading: false,
  
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case PERIODS_FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case PERIODS_FETCH_SUCCESS:
      return {
        ...state,
        farmDetails:action.details,
        periods: action.periods,
        loading:false
      };
    case PERIODS_FETCH_FAILED:
      return {
        ...state,
        error: action.error,
        loading:false
      };
    default:
      return state;
  }
}