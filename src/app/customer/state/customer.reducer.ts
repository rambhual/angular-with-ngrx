import * as fromCustomerActions from "./customer.actions";
import { Customer } from "../customer.model";

export const customers = "customers";

export interface State {
  customers: Customer[];
  loading: boolean;
  loaded: boolean;
}

export const initialState: State = {
  customers: [],
  loading: false,
  loaded: true
};

export function customerReducer(
  state = initialState,
  action: fromCustomerActions.CustomerActions
): State {
  switch (action.type) {
    case fromCustomerActions.CustomerActionTypes.LOAD_CUSTOMERS:
      return { ...state, customers: action.payload };
    default:
      return state;
  }
}
