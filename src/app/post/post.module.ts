import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgZorroAntdModule } from "ng-zorro-antd";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";

import { PostRoutingModule } from "./post-routing.module";
import { ListComponent } from "./list/list.component";
import * as fromPost from "./state/post.reducer";
import { PostEffects } from "./state/post.effects";

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    HttpClientModule,
    NgZorroAntdModule,
    StoreModule.forFeature(fromPost.posts, fromPost.reducer),
    EffectsModule.forFeature([PostEffects])
  ]
})
export class PostModule {}
