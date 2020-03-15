import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Customer } from "./customer.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CustomerService {
  constructor(private readonly http: HttpClient) {}
  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>("http://localhost:1337/customers");
  }
}
