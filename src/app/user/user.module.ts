import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ListComponent } from './list/list.component';
import { StoreModule } from '@ngrx/store';
import * as fromUser from './state/user.reducer';


@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    StoreModule.forFeature(fromUser.userFeatureKey, fromUser.reducer)
  ]
})
export class UserModule { }
