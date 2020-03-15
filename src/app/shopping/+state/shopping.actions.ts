import { Action } from "@ngrx/store";
import { Shopping } from "../Shopping.model";

export const LOAD_SHOPPINGS = "[Shopping] LOAD_SHOPPINGS";
export const LOAD_SHOPPING_SUCCESS = "[Shopping] LOAD_SHOPPING_SUCCESS";

export class LoadShoppings implements Action {
  readonly type = LOAD_SHOPPINGS;
  constructor(public payload: Shopping[]) {}
}

export type ShoppingActions = LoadShoppings;
