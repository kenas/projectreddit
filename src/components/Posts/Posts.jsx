import Post from './Post/Post';
import localPostsStyles from './localPosts.module.css';

import {fetchPosts} from '../../store/slices/PostsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const Posts = () => {


    const dispatch = useDispatch(); 

    const posts = useSelector((state) => state.posts.posts); // Use selector to get posts from the store
    const status = useSelector((state) => state.posts.status);
    const errors = useSelector((state) => state.posts.errors);
  
    // Dispatch action when the component mounts or status changes
    useEffect(() => {
      if (status === 'idle') {
        dispatch(fetchPosts()); // Dispatch the fetchPosts async action
      }
    }, [dispatch, status]); 
    return (
        <div className={localPostsStyles.postsContainer}>
      
        {posts.map((post) => {
         
            return (
            
                <Post 
                    post={post}
                    key={post.id}
                />
              

            )
        })}
        
        </div>
    )
}

export default Posts;