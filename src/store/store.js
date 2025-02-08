import { configureStore } from "@reduxjs/toolkit";

//import Slices
import postsReducer from './slices/PostsSlice.js';
import newsReducer from './slices/NewsSlice.js';
import redditsReducer from './slices/SubredditSlice.js';

const store = configureStore({
    reducer: {
        posts: postsReducer,
        news: newsReducer,
        subreddits: redditsReducer,
        // avaterUsers: avaterReducer

    }
})

export default store;

