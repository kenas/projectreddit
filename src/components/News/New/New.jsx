import localNewsStyle from './localNew.module.css';

const New = ({news, cutTitle, id}) => {


    return (
        <>
            <div key={id} className={localNewsStyle.card}>
                <div className={localNewsStyle.gradient}></div>
                    <img src={news.url? news.url : ''} alt="" />
                <div className={localNewsStyle.details}>
                    <h2 className={localNewsStyle.title}>{cutTitle(news.title)}</h2>
                    <a href=''>{news.subreddit_name_prefixed}</a>
                </div>
            </div>
        </>
    )
}

export default New;