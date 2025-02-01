import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async () => {

        try {
            const response = await fetch('https://www.reddit.com/r/all/hot.json');

            if(!response.ok) {
                throw new Error('Failed to fetch posts');
            }

           return  await response.json();
            // console.log(data)
        } catch(error) {
            console.log('Error', + error)
        }
    }
)

export const fetchAuthorForProfilePic = createAsyncThunk(
    'user/fetchAuthorForProfilePic',
    async (username) => {
        try {
            const response = await fetch(`https://www.reddit.com/r/${username}/about.json`);

            if(!response.ok) {
                throw new Error("I cound not fetch the User data!");
            }

            return await response.json();
            
        } catch(error) {
            console.log('Error', + error)
        }
    }
)

const postsReducer = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        status: 'idle',
        errors: {}
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchPosts.fulfilled, (state, action) => {
        
            state.status = 'succeeded';
            //Remeber, you can get alredy right data structure format before loop in the component
            state.posts = action.payload.data.children.map((post) => post.data);
        })
        .addCase(fetchPosts.rejected, (state, action) => {
            // console.log(action.error.message);
            state.status = 'rejected';
            state.errors = action.error.message;
        })
    }

})


export default postsReducer.reducer;