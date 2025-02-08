import localAside from './localSub.module.css';
import { useEffect } from 'react';

import { fetchSubreddits } from '../../store/slices/SubredditSlice';
import { useDispatch, useSelector } from 'react-redux';

const Subreddits = () => {
    const dispatch = useDispatch();
    const { subreddits, status, errors } = useSelector(state => state.subreddits);

    useEffect(() => {
        dispatch(fetchSubreddits());
    }, [dispatch], status)

    return (
        <div className={localAside.subreddits}>
            <h4>Popular SUBREDDITS</h4>
            {status === 'rejected' ? errors : 
            <ul>
                {subreddits.map((sub) => {
                    return (
                        <li key={sub.id}>{sub.name}</li>
                    )
                }
                )}

            </ul>
            }
        </div>
    )
}

export default Subreddits;