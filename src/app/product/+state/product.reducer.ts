import { Action, createReducer, on } from "@ngrx/store";

export const productFeatureKey = "products";

export const initialState = {
  productFeatureKey: [],
  loading: false,
  loaded: true
};

export function reducer(state = initialState, action: any) {
  switch (action.type) {
    case "LOAD_PRODUCT":
      return {
        ...state,
        products: [...state.productFeatureKey, action.payload]
      };

    default:
      return state;
  }
}
