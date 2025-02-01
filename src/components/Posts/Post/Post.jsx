import comment from '../../../assets/comment.svg'
import arrowUp  from '../../../assets/arrow-up.svg'
import arrowDown  from '../../../assets/arrow-down.svg'
import showLadscape from '../../../assets/show-ladscape.jpg';
import share from '../../../assets/share.svg'


import localPostsStyle from './localPost.module.css';

const Post = ({post}) => {

    const getImage = (data) => {
    //    console.log(typeof(data))
       console.log(data[0])
        return  data?.images[0]?.resolutions[0]?.url;
    }

    return (
        <>
        <div className={localPostsStyle.post}>
            <h2>{post.title}</h2>
        
                <div className={localPostsStyle.containerDetails}>

                    <div className={localPostsStyle.detailsPost}>
                        <img src='https://i.redd.it/snoovatar/avatars/fc1176a4-403b-4299-8661-fa27b97aa853.png' alt="Profile picture of user"/>
                        <p><a href={`https://www.reddit.com/user/${post.author}/`}>{post.author}</a> | <a href={`https://www.reddit.com/${post.subreddit_name_prefixed}/`}>{post.subreddit_name_prefixed}</a></p>
                    </div>
        
                    <p>{post.timeAgo}</p>
                </div>

            {/* <img src={post.preview.images.url} alt="Traditional soupe from Chine" /> */}
            <img src={post.url} alt="Alt text, Post preview" />    

          
            <p className={localPostsStyle.content}>{post.selftext}</p>

            <div className={localPostsStyle.containerActionLinks}>
                <div className={localPostsStyle.actionLinkVote}>
                    <img src={arrowUp} alt="Vote for the Article" />
                        <p>34</p>
                    <img src={arrowDown} alt="Vote for the Article" />
                </div>

                <div className={localPostsStyle.actionComment}>
                    <img src={comment} alt="How many comments" />
                    <p>28</p>
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
