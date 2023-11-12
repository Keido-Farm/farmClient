import {
  CATEGORY_FETCH_SUCCESS
} from "../actions/actionType";

const initialState = {
  categories: [],
  loading: false,
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case CATEGORY_FETCH_SUCCESS:
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
}
