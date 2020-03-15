import { Product } from "../Product.model";
import * as fromProductAction from "./product.actions";

export const products = "products";

export interface ProductState {
  products: Product[];
  loading: boolean;
  loaded: boolean;
  error: string;
}

export const initialState: ProductState = {
  products: [],
  loading: false,
  loaded: true,
  error: ""
};

export function productReducer(
  state = initialState,
  action: fromProductAction.ProductActions
): ProductState {
  switch (action.type) {
    case fromProductAction.ProductActionTypes.LOAD_PRODUCTS:
      return { ...state, loading: true };
    case fromProductAction.ProductActionTypes.LOAD_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        products: action.payload
      };
    case fromProductAction.ProductActionTypes.LOAD_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        loaded: true,
        error: action.payload.error
      };

    default:
      return state;
  }
}
