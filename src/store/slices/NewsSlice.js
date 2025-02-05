import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { getAccessToken } from '../../api/getAccessToken';

//Fetching popular posts
export const fetchPopular = createAsyncThunk(
    'popular/fetchPopular',
    async (_, {rejectWithValue}) => {
                const token = await getAccessToken();
                if (!token) {
                    return rejectWithValue('No token received');
                }

        try {
            const response = await fetch('https://api.reddit.com/r/popular.json');
            
            if(!response.ok) {
                throw new Error("I cound not fetch the Popular!");
            }

            return await response.json();
            
        } catch(error) {
            console.log('Error', error)
            return rejectWithValue({ message: error.message });
        }
    }
)


//Reducer
const newsResucer = createSlice({
    name: 'news',
    initialState: {
        news: [],
        status: 'idle',
        errors: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPopular.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchPopular.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.news = action.payload.data.children.slice(0, 4).map((post) => post.data);
        })
        .addCase(fetchPopular.rejected, (state, action) => {
            state.status = 'failed';
            state.errors.push(action.payload?.message || 'Unknown error');
        })
    }
})

export default newsResucer.reducer;