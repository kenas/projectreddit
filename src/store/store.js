import { configureStore } from "@reduxjs/toolkit";

//import Slices
import postsReducer from './slices/PostsSlice.js';
import newsReducer from './slices/NewsSlice.js';
// import avaterReducer from './slices/UserAvatersSlice.js';

const store = configureStore({
    reducer: {
        posts: postsReducer,
        news: newsReducer,
        // avaterUsers: avaterReducer

    }
})

export default store;

