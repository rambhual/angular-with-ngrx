import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AuthRoutingModule } from "./auth-routing.module";
import { LoginComponent } from "./login.component";
import { ReactiveFormsModule } from "@angular/forms";
import { IconsProviderModule } from "../icons-provider.module";
import { NgZorroAntdModule } from "ng-zorro-antd";

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    IconsProviderModule,
    NgZorroAntdModule,
    ReactiveFormsModule
  ]
})
export class AuthModule {}
