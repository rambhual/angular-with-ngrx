import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Observable, of } from "rxjs";
import { mergeMap, catchError, map } from "rxjs/operators";

import * as fromPostAction from "../state/post.actions";
import { PostService } from "../post.service";
import { Post } from "../post.model";
import { Action } from "@ngrx/store";

@Injectable()
export class PostEffects {
  constructor(
    private actions$: Actions,
    private readonly postService: PostService
  ) {}

  @Effect()
  loadPosts$: Observable<Action> = this.actions$.pipe(
    ofType<fromPostAction.LoadPosts>(fromPostAction.PostActionTypes.LOAD_POST),
    mergeMap((actions: fromPostAction.LoadPosts) =>
      this.postService.getPosts().pipe(
        map((posts: Post[]) => {
          return new fromPostAction.LoadPostsSuccess(posts);
        }),
        catchError(error => of(new fromPostAction.LoadPostsFailure(error)))
      )
    )
  );
}
