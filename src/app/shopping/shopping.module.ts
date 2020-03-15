import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ShoppingRoutingModule } from "./shopping-routing.module";
import { StoreModule } from "@ngrx/store";
import * as fromShopping from "./+state/shopping.reducer";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ShoppingRoutingModule,
    StoreModule.forFeature(fromShopping.shoppings, fromShopping.reducer)
  ]
})
export class ShoppingModule {}
