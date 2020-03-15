import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Store } from "@ngrx/store";
import * as fromCommentAction from "../state/comment.actions";
@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
  constructor(private readonly store: Store<any>) {}

  ngOnInit() {
    this.store.dispatch({
      type: fromCommentAction.CommentActionTypes.LOAD_COMMENTS
    });
    this.store.subscribe(res => console.log(res));
  }
}
