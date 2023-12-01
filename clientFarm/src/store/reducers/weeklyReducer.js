import {
  WEEKLY_FETCH_REQUEST,
  WEEKLY_FETCH_SUCCESS,
  WEEKLY_FETCH_FAILED,
} from "../actions/actionType";

const initialState = {
  periodDetails:{},
  weeks:[],
  error:'',
  loading: false
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case WEEKLY_FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case WEEKLY_FETCH_SUCCESS:
      return {
        ...state,
        periodDetails:action.details,
        weeks: action.weeks,
        loading:false
      };
    case WEEKLY_FETCH_FAILED:
      return {
        ...state,
        error: action.error,
        loading:false
      };
    default:
      return state;
  }
}