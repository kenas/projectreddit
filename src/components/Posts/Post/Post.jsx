import comment from '../../../assets/comment.svg'
import arrowUp  from '../../../assets/arrow-up.svg'
import arrowDown  from '../../../assets/arrow-down.svg'
import showLadscape from '../../../assets/show-ladscape.jpg';
import profile1 from '../../../assets/profile1.png'
import profile2 from '../../../assets/profile2.png'
import imgSoupe from '../../../assets/soupe.jpg'
import share from '../../../assets/share.svg'

import localPostsStyle from './localPost.module.css';

const Posts = ({post}) => {
    return (
        <>
        <div className={localPostsStyle.post}>
            <h2>{post.title}</h2>
                <div className={localPostsStyle.containerDetails}>

                    <div className={localPostsStyle.detailsPost}>
                        <img src={profile1} alt="Profile picture of user"/>
                        <p>{post.author}</p>
                    </div>
        
                    <p>{post.timeAgo}</p>
                </div>

            <img src={showLadscape} alt="Traditional soupe from Chine" />
            <p className={localPostsStyle.content}>{post.content}</p>

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

export default Posts;
