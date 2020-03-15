import * as fromCustomerActions from "./customer.actions";
import { Customer } from "../customer.model";
import * as fromAppState from "../../state/app-state";
export const customers = "customers";

export interface CustomerState {
  customers: Customer[];
  loading: boolean;
  loaded: boolean;
  error: string;
}

export const initialState: CustomerState = {
  customers: [
    {
      name: "Ramprit Sahani",
      address: "Mumbai Borivali East",
      phone: "9867405720",
      isMemberShip: true,
      id: "5e6e12bd23defa5cd83d4cbe"
    },
    {
      name: "Ramesh Shingh",
      address: "Mumbai Malad",
      phone: "9867405723",
      isMemberShip: true,
      id: "5e6e12cf23defa5cd83d4cbf"
    }
  ],
  loading: false,
  loaded: true,
  error: ""
};

export interface AppState extends fromAppState.AppSate {
  customers: CustomerState;
}
export function customerReducer(
  state = initialState,
  action: fromCustomerActions.CustomerActions
): CustomerState {
  switch (action.type) {
    case fromCustomerActions.CustomerActionTypes.LOAD_CUSTOMERS:
      return { ...state, loading: true };

    case fromCustomerActions.CustomerActionTypes.LOAD_CUSTOMERS_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        customers: action.payload
      };

    case fromCustomerActions.CustomerActionTypes.LOAD_CUSTOMERS_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.payload
      };

    default:
      return state;
  }
}
