import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const fetchPopular = createAsyncThunk(
    'popular/fetchPopular',
    async () => {

        try {
            const response = await fetch('https://www.reddit.com/r/popular.json');
            
            if(!response.ok) {
                throw new Error("I cound not fetch the Popular!");
                
            }

            return await response.json();
        } catch(error) {
            console.log('Error', + error)
        }
    }
)

const newsResucer = createSlice({
    name: 'news',
    initialState: {
        news: [],
        status: 'idle',
        errors: []
    },
    reducer: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPopular.pending, (state) => {
            state.state = 'loading';
        })
        .addCase(fetchPopular.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.news = action.payload.data.children.slice(0, 4).map((post) => post.data);
        })
        .addCase(fetchPopular.rejected, (state, action) => {
            state.errors = action.error.message;
        })
    }
})

export default newsResucer.reducer;