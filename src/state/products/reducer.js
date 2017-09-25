import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
} from '../actionTypes';

const initialState = {
  isLoading: false
};

export default (state = initialState, action) => {
  switch(action.type){
    case FETCH_PRODUCTS:
      return{
        ...state,
        isLoading: true,
      };


    case FETCH_PRODUCTS_SUCCESS:
      return{
        ...state,
        isLoading: false,
        products: action.products,
      };

    case FETCH_PRODUCTS_FAILURE:
      return{
        ...state,
        error: action.error,
      };

    default:
    return state;
  }
}
