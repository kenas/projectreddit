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

import localNews from './localNews.module.css';
import img from '../../assets/snake.png';

const News = () => {
    return (
        <div className={localNews.cardContainer}>
          {localNewsData.map((n, index) =>
            <div key={index} className={localNews.card}>
                      <div className={localNews.gradient}></div>
                      <img src={img} alt="" />
              <div className={localNews.details}>
      
                <div className={localNews.title}>{n.title}</div>
                <p>{n.content}</p>
              </div>
            </div>
          )}
        </div>
    )
}

export default News;