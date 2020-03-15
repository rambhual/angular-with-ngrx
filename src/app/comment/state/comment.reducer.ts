import { CommentModel } from "../comment.model";
import * as fromCommentAction from "./comment.actions";
export const comments = "comments";

export interface CommentState {
  comments: CommentModel[];
  loading: boolean;
  loaded: boolean;
  error: string;
}

export const initialState: CommentState = {
  comments: [],
  loading: true,
  loaded: true,
  error: ""
};

export function reducer(
  state = initialState,
  action: fromCommentAction.CommentActions
): CommentState {
  switch (action.type) {
    case fromCommentAction.CommentActionTypes.LOAD_COMMENTS:
      return { ...state, loading: true };

    case fromCommentAction.CommentActionTypes.LOAD_COMMENTS_SUCCESS:
      return {
        ...state,
        loading: true,
        loaded: true,
        comments: action.payload
      };
    case fromCommentAction.CommentActionTypes.LOAD_COMMENTS_FAILURE:
      return {
        ...state,
        loading: true,
        loaded: true,
        error: action.payload.error
      };
    default:
      return state;
  }
}
