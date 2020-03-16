import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";

import * as fromPostAction from "../state/post.actions";
import * as fromPostReducer from "../state/post.reducer";
import {
  getPostsSelectors,
  getPostsErrorSelector
} from "../state/post.selectors";
import { Post } from "../post.model";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
  posts$: Observable<Post[]>;
  error$: Observable<string>;
  constructor(private readonly store: Store<fromPostReducer.AppState>) {}

  ngOnInit() {
    this.store.dispatch(new fromPostAction.LoadPosts());
    this.posts$ = this.store.pipe(select(getPostsSelectors));
    this.error$ = this.store.pipe(select(getPostsErrorSelector));
  }
}
