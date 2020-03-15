import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PostRoutingModule } from "./post-routing.module";
import { ListComponent } from "./list/list.component";
import { StoreModule } from "@ngrx/store";
import * as fromPost from "./state/post.reducer";

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    StoreModule.forFeature(fromPost.posts, fromPost.reducer)
  ]
})
export class PostModule {}
