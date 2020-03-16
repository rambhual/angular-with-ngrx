import { Post } from "../post.model";
import * as fromPostAction from "./post.actions";
import * as fromAppState from "../../state/app-state";
export const posts = "posts";

export interface PostState {
  posts: Post[];
  loading: boolean;
  loaded: boolean;
  error: string;
}

export const initialState: PostState = {
  posts: [],
  loading: false,
  loaded: true,
  error: ""
};

export interface AppState extends fromAppState.AppSate {
  posts: PostState;
}

export function reducer(
  state = initialState,
  action: fromPostAction.PostActions
): PostState {
  switch (action.type) {
    case fromPostAction.PostActionTypes.LOAD_POST:
      return { ...state, loading: true };

    case fromPostAction.PostActionTypes.LOAD_POST_Success:
      return { ...state, loading: true, loaded: true, posts: action.payload };

    case fromPostAction.PostActionTypes.LOAD_POST_Failure:
      return {
        ...state,
        loading: true,
        loaded: true,
        error: action.payload
      };
    default:
      return state;
  }
}
