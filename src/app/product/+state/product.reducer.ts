import { Product } from "../Product";

export const products = "products";

export interface State {
  products: Product[];
  loading: boolean;
  loaded: boolean;
}
export const initialState: State = {
  products: [],
  loading: false,
  loaded: true
};

export function reducer(state: State | undefined, action: any) {
  switch (action.type) {
    case "LOAD_PRODUCT":
      return {
        ...state,
        products: [...state.products, action.payload]
      };

    default:
      return state;
  }
}
