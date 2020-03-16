import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostState, posts } from "./post.reducer";

export const getPostFeatureSelectors = createFeatureSelector<PostState>(posts);
export const getPostsSelectors = createSelector(
  getPostFeatureSelectors,
  (state: PostState) => state.posts
);

export const getPostsLoadingSelector = createSelector(
  getPostFeatureSelectors,
  (state: PostState) => state.loading
);

export const getPostsLoadedSelector = createSelector(
  getPostFeatureSelectors,
  (state: PostState) => state.loaded
);

export const getPostsErrorSelector = createSelector(
  getPostFeatureSelectors,
  (state: PostState) => state.error
);
