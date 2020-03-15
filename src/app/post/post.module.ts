import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PostRoutingModule } from "./post-routing.module";
import { ListComponent } from "./list/list.component";
import { StoreModule } from "@ngrx/store";
import * as fromPost from "./state/post.reducer";
import { EffectsModule } from '@ngrx/effects';
import { PostEffects } from './state/post.effects';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    StoreModule.forFeature(fromPost.posts, fromPost.reducer),
    EffectsModule.forFeature([PostEffects])
  ]
})
export class PostModule {}
