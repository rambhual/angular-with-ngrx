import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromEmployee from './state/employee.reducer';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    StoreModule.forFeature(fromEmployee.employeeFeatureKey, fromEmployee.reducer)
  ]
})
export class EmployeeModule { }
