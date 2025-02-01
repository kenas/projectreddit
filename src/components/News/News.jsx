const localNewsData = [
    {
      title: "French people enjoy",
      content: "The French people enjoy"
    },
    {
      title: "Italy has new rules",
      content: "Italy has new rules ..."
    },
    {
      title: "A new Study showed",
      content: "The fox has a genetic ..."
    },
    {
      title: "The Polish Government",
      content: "Wants to spend extra money ..."
    }
  ];

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import {fetchPopular} from '../../store/slices/NewsSlice';
import New from './New/New';
import localNews from './localNews.module.css';

const News = () => {

  const cutTitle = (title) => {
    
   return title.length >= 30 ? title.slice(0, 30)+ '...' : title;
    
  }

    const dispatch = useDispatch();

    const redditNews = useSelector((state) => state.news.news); // Use selector to get posts from the store
    const status = useSelector((state) => state.news.status);
    const errors = useSelector((state) => state.news.errors);
    
    useEffect(() => {


      if(status === 'idle') {
       
        dispatch(fetchPopular());
  
      }
   
    }, [dispatch], status)

    return (
        <div className={localNews.cardContainer}>
          {redditNews.map((news, id) =>
            <New 
              key={news.id}
              news={news}
              cutTitle={cutTitle}
            />
          )}
        </div>
    )
}

export default News;