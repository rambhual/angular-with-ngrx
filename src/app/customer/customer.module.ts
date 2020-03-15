import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { CustomerRoutingModule } from "./customer-routing.module";
import { ListComponent } from "./list/list.component";
import { HttpClientModule } from "@angular/common/http";
import { customerReducer, customers } from "./state/customer.reducer";

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    HttpClientModule,
    StoreModule.forFeature(customers, customerReducer)
  ]
})
export class CustomerModule {}
