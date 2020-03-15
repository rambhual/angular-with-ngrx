import { Action } from "@ngrx/store";
import { Post } from "../post.model";

export enum PostActionTypes {
  LOAD_POST = "[Post] Load Posts",
  LOAD_POST_Success = "[Post] Load Posts Success",
  LOAD_POST_Failure = "[Post] Load Posts Failure"
}

export class LoadPosts implements Action {
  readonly type = PostActionTypes.LOAD_POST;
}

export class LoadPostsSuccess implements Action {
  readonly type = PostActionTypes.LOAD_POST_Success;
  constructor(public payload: Post[]) {}
}

export class LoadPostsFailure implements Action {
  readonly type = PostActionTypes.LOAD_POST_Failure;
  constructor(public payload: { error: string }) {}
}

export type PostActions = LoadPosts | LoadPostsSuccess | LoadPostsFailure;
