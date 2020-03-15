import { Action } from "@ngrx/store";
import { Customer } from "../customer.model";

export enum CustomerActionTypes {
  LOAD_CUSTOMERS = "[Customer] Load Customers"
}

export class LoadCustomers implements Action {
  readonly type = CustomerActionTypes.LOAD_CUSTOMERS;
  constructor(public payload: Customer[]) {}
}

export type CustomerActions = LoadCustomers;
