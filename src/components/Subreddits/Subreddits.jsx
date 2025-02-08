import localAsideStyles from './localSub.module.css';
import { useEffect } from 'react';
import Subreddit from './subreddit';

import { fetchSubreddits } from '../../store/slices/SubredditSlice';
import { useDispatch, useSelector } from 'react-redux';

const Subreddits = () => {
    const dispatch = useDispatch();
    const { subreddits, status, errors } = useSelector(state => state.subreddits);

    useEffect(() => {
        dispatch(fetchSubreddits());
    }, [dispatch], status)

    return (
        <div className={localAsideStyles.subreddits}>
            <h4>Popular SUBREDDITS</h4>
            {status === 'rejected' ? errors : 
            <ul>
                {subreddits.map((sub) => {
                    return (
                        <Subreddit 
                            key={sub.id}
                            sub={sub}
                        />
                    )
                }
                )}

            </ul>
            }
        </div>
    )
}

export default Subreddits;