import { Shopping } from "../Shopping.model";
import * as shoppingActions from "./shopping.actions";
export const shoppings = "shoppings";

export interface State {
  shoppings: Shopping[];
  loading: boolean;
  loaded: boolean;
}

export const initialState: State = {
  shoppings: [],
  loading: false,
  loaded: true
};

export function reducer(
  state = initialState,
  action: shoppingActions.ShoppingActions
): State {
  switch (action.type) {
    case shoppingActions.LOAD_SHOPPINGS:
      return { ...state, shoppings: action.payload };

    default:
      return state;
  }
}
