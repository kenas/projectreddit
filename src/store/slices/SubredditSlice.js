import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchSubreddits  = createAsyncThunk(
    'subreddit/PopularSubreddit',
    async(_, {rejectWithValue}) => {
        try {
            const res = await fetch('https://api.reddit.com/subreddits/popular.json')

            if (!res.ok) {
                throw new Error('Failed to fetch popular subreddit!');
            }

            const data = await res.json()
            // console.log("API Response:", data.data.children);
            const subreddit = data.data.children.map((sub) => ({
                id: sub.data.id,
                name: sub.data.display_name_prefixed,
                icon: sub.data.icon_img
            }))

            // console.log(subreddit);

            return subreddit;

        } catch(error) {
            return rejectWithValue({ message: error.message });
        }
    }
 
)

const redditReducer = createSlice({
    name: 'subreddits',
    initialState: {
        subreddits: [],
        errors: [],
        status: 'idle'
    }, 
    reducers: {},
    extraReducers:  (builder) => {
        builder
        .addCase(fetchSubreddits.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchSubreddits.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.subreddits = action.payload;
        })
        .addCase(fetchSubreddits.rejected, (state, action) => {
            state.status = 'rejected';
            state.errors.push(action.payload?.message || 'An unknown error occurred');
        })
    }
})

export default redditReducer.reducer;




