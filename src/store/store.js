import { configureStore } from "@reduxjs/toolkit";

//import Slices
import postsReducer from './slices/PostsSlice.js';
import NewsReducer from './slices/NewsSlice.js';

const store = configureStore({
    reducer: {
        posts: postsReducer,
        news: NewsReducer

    }
})

export default store;

