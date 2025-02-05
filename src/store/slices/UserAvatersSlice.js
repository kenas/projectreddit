// import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
// import { getAccessToken } from '../../api/getAccessToken';

// export const fetchUserData = createAsyncThunk(
//     'user/fetchUserData',
//     async (username, {rejectWithValue}) => {
//         console.log(username);
//         const token = await getAccessToken();
//         if (!token) {
//             return rejectWithValue('No token received');
//         }

//         try {
//             const response = await fetch(`https://cors-anywhere.herokuapp.com/https://oauth.reddit.com/user/${username}/about.json`, {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                     'User-Agent': 'app/1.0 (by /u/Due-Regular2420)',
//                 },
//             });

//             if(!response.ok) {
//                 throw new Error("I cound not fetch the user!");
//             }

//             return await response.json();

//         } catch(error) {
//             console.log('Error', error);
//             return rejectWithValue({ message: error.message });
            
//         }
//     }
// )

// const avaterReducer = createSlice({
//     name: 'avater',
//     initialState: {
//         userAvatar: {},
//         status: 'idle',
//         errors: []
//     },
//     reducers: {},
//     extraReducers: (builder) => {
//         builder.addCase(fetchUserData.pending, (state) => {
//             state.status = 'loading';
//         })
//         .addCase(fetchUserData.fulfilled, (state, action) => {
//             state.status = 'succeeded';
//             state.userAvatar = action.payload.data.icon_img;
//         })
//         .addCase(fetchUserData.rejected, (state, action) => {
//             state.status = 'failed';
//             state.errors = action.payload.message;
//         })
//     }
// })

// export default avaterReducer.reducer;