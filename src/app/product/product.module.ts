import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProductRoutingModule } from "./product-routing.module";
import { ListComponent } from "./list/list.component";
import { StoreModule } from "@ngrx/store";
import * as fromProduct from "./+state/product.reducer";

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    StoreModule.forFeature(fromProduct.products, fromProduct.reducer)
  ]
})
export class ProductModule {}
