import { Action } from "@ngrx/store";
import { CommentModel } from "../comment.model";

export enum CommentActionTypes {
  LOAD_COMMENTS = "[Comment] Load Comments",
  LOAD_COMMENTS_SUCCESS = "[Comment] Load Comments Success",
  LOAD_COMMENTS_FAILURE = "[Comment] Load Comments Failure"
}

export class LoadComments implements Action {
  readonly type = CommentActionTypes.LOAD_COMMENTS;
}

export class LoadCommentsSuccess implements Action {
  readonly type = CommentActionTypes.LOAD_COMMENTS_SUCCESS;
  constructor(public payload: CommentModel[]) {}
}

export class LoadCommentsFailure implements Action {
  readonly type = CommentActionTypes.LOAD_COMMENTS_FAILURE;
  constructor(public payload: { error: string }) {}
}

export type CommentActions =
  | LoadComments
  | LoadCommentsSuccess
  | LoadCommentsFailure;
