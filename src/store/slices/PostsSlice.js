import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async (_, { rejectWithValue }) => {

        try {
            const response = await fetch('https://api.reddit.com/?limit=13');

            if (!response.ok) {
                throw new Error('Failed to fetch posts');
            }

            const data = await response.json();

            let posts = data.data.children.map((post) => ({
                id: post.data.id,
                title: post.data.title,
                author: post.data.author,
                avatar: '',
                categories: post.data.content_categories,
                created: post.data.created,
                subreddit: post.data.subreddit_name_prefixed,
                images: post.data.preview,
                media: post.data.secure_media,
                content: post.data.selftext,
                url: post.data.url,
                num_comments: post.data.num_comments
            }));

            let avatarRequests = posts.map(async (post, index) => {
          
                    try {
                        
                        const response = await fetch(`https://api.reddit.com/user/${post.author}/about.json`);
        
                            if(!response.ok) {
                                throw new Error("I cound not fetch the users!");
                            }
        
                            const avatars = await response.json();
                            
                            post.avatar = avatars.data.icon_img ? avatars.data.icon_img.split('?')[0] : 'https://www.redditstatic.com/avatars/defaults/v2/avatar_default_2.png';
                        
                    } catch (error) {
                        console.error(`Failed to fetch avatar for ${post.author}`, error);
                    }
                    return post; 
            });
            posts = await Promise.all(avatarRequests);
            console.log(posts)
            return posts;

   
        } catch (error) {
            return rejectWithValue({ message: error.message });
        }
    }
);

const postsReducer = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        status: 'idle',
        errors: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = 'rejected';
                // Provide a more robust error message
                state.errors.push(action.payload?.message || 'An unknown error occurred');
            });
    },
});

export default postsReducer.reducer;