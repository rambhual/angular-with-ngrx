import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CommentRoutingModule } from "./comment-routing.module";
import { ListComponent } from "./list/list.component";
import { StoreModule } from "@ngrx/store";
import * as fromComment from "./state/comment.reducer";

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    CommentRoutingModule,
    StoreModule.forFeature(fromComment.comments, fromComment.reducer)
  ]
})
export class CommentModule {}
