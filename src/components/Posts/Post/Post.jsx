import comment from '../../../assets/comment.svg'
import arrowUp  from '../../../assets/arrow-up.svg'
import arrowDown  from '../../../assets/arrow-down.svg'
import share from '../../../assets/share.svg'


import localPostsStyle from './localPost.module.css';

const Post = ({post}) => {

    const getImage = (images) => {
        if (images && images.images) {
            return images.images.map((img, index) => (
                <img key={index} src={img.source.url.replace("&amp;", "&")} alt="" width="400" />
            ));
        } else if (post.secure_media && post.secure_media.reddit_video) {
            return (
                <video controls width="400">
                    <source src={post.secure_media.reddit_video.fallback_url} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            );
        }
        return null;
    };
    
    // const getImage = (preview) => {
        
    //     if (!preview || !preview.images) return null; // Check if preview exists

    //     return preview.images.map((img, index) => (
    //         <img key={index} src={img.source.url} alt="Preview" width="400" />
    //     ));
   
        
      
    //    // return post ? <img src={post.pre} alt="The picture of the article."/> : '';
    // }

    return (
        <>
        <div className={localPostsStyle.post}>
            <h2>{post.title}</h2>
        
                <div className={localPostsStyle.containerDetails}>

                    <div className={localPostsStyle.detailsPost}>
                        <img src={post.avatar ? post.avatar : null} />
                        <p><a href={`https://www.reddit.com/user/${post.author}/`}>{post.author}</a> | <a href={`https://www.reddit.com/${post.subreddit}/`}>{post.subreddit}</a></p>
                    </div>
        
                    <p>{post.timeAgo}</p>
                </div>

                {getImage(post.images)}
          
            <p className={localPostsStyle.content}>{post.selftext}</p>

            <div className={localPostsStyle.containerActionLinks}>
                <div className={localPostsStyle.actionLinkVote}>
                    <img src={arrowUp} alt="Vote for the Article" />
                        <p>34</p>
                    <img src={arrowDown} alt="Vote for the Article" />
                </div>

                <div className={localPostsStyle.actionComment}>
                    <img src={comment} alt="How many comments" />
                    <p>{post.num_comments}</p>
                </div>

                <div className={localPostsStyle.actionComment}>
                    <img src={share} alt="You can share the article" />
                    <p>Share</p>
                </div>
            </div>
        </div>
        <hr/>
        </>
    )
}

export default Post;
