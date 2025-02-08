import Post from './Post/Post';
import localPostsStyles from './localPosts.module.css';

import {fetchPosts} from '../../store/slices/PostsSlice';
// import {fetchUserData} from '../../store/slices/UserAvatersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const Posts = () => {

    const dispatch = useDispatch(); 

    const {posts, errros, status } = useSelector((state) => state.posts); // Use selector to get posts from the store


    useEffect(() => {
      if (status === 'idle') {
        dispatch(fetchPosts());
      }
    }, [dispatch, status]); 

    return (
   
        <div className={localPostsStyles.postsContainer}>
        {status === 'rejected' ? errros : 

        posts.map((post) => {
         
            return (
            
                <Post 
                    post={post}
                    key={post.id}
                />
            )
        })
        }
        </div>
    )
}

export default Posts;