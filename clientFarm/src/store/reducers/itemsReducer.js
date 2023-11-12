import {
  ITEMS_FETCH_REQUEST,
  ITEMS_FETCH_SUCCESS,
  ITEMS_FETCH_FAILED,
  ITEMSBYID_FETCH_SUCCESS
} from "../actions/actionType";

const initialState = {
  items: [],
  loading: false,
  selectedItem:{},
  ingredients:[]
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ITEMS_FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ITEMS_FETCH_SUCCESS:
      // console.log('masuk ke sini');
      return {
        ...state,
        items: action.payload,
        loading:false
      };
    case ITEMS_FETCH_FAILED:
      // console.log('masuk ke sini');
      return {
        ...state,
        error: action.payload,
        loading:false
      };
      case ITEMSBYID_FETCH_SUCCESS:
        return {
          ...state,
          selectedItem:action.payload,
          ingredients:action.ingredients
        }
    default:
      return state;
  }
}
