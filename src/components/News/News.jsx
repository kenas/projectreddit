import localNews from './localNews.module.css';

const News = () => {
    return (
        <div className={localNews.cardContainer}>
            <div className={localNews.card}>
                <div className={localNews.title}>French people enjoy</div>
                <p>The French people enjoy</p>
            </div>

            <div className={localNews.card}>
                <div className={localNews.title}>Italy has new rulles</div>
                <p>Italy has new rulles ...</p>
            </div>

            <div className={localNews.card}>
                <div className={localNews.title}>A new Study showed</div>
                <p>The fox has a genetic ...</p>
            </div>

            <div className={localNews.card}>
                <div className={localNews.title}>A new Study showed</div>
                <p>The fox has a genetic ...</p>
            </div>

        </div>

        
    )
}

export default News;