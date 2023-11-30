import {
  FARMS_FETCH_REQUEST,
  FARMS_FETCH_SUCCESS,
  FARMS_FETCH_FAILED,
} from "../actions/actionType";

const initialState = {
  farms: [],
  error:'',
  loading: false,
  
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case FARMS_FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FARMS_FETCH_SUCCESS:
      return {
        ...state,
        farms: action.payload,
        loading:false
      };
    case FARMS_FETCH_FAILED:
      return {
        ...state,
        error: action.payload,
        loading:false
      };
    default:
      return state;
  }
}
