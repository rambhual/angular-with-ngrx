import { Action } from "@ngrx/store";
import { Product } from "../Product.model";

export enum ProductActionTypes {
  LOAD_PRODUCTS = "[Product] Load Products",
  LOAD_PRODUCTS_SUCCESS = "[Product] Load Products Success",
  LOAD_PRODUCTS_FAILURE = "[Product] Load Products Failure"
}

export class LoadProducts implements Action {
  readonly type = ProductActionTypes.LOAD_PRODUCTS;
}

export class LoadProductsSuccess implements Action {
  readonly type = ProductActionTypes.LOAD_PRODUCTS_SUCCESS;
  constructor(public payload: Product[]) {}
}

export class LoadProductsFailure implements Action {
  readonly type = ProductActionTypes.LOAD_PRODUCTS_FAILURE;
  constructor(public payload: { error: string }) {}
}

export type ProductActions =
  | LoadProducts
  | LoadProductsSuccess
  | LoadProductsFailure;
