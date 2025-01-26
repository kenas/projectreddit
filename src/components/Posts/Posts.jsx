import localPosts from './localPosts.module.css';

import imgSoupe from '../../assets/soupe.jpg'
import profile1 from '../../assets/profile1.png'
import profile2 from '../../assets/profile2.png'
import share from '../../assets/share.svg'
import comment from '../../assets/comment.svg'
import arrowUp  from '../../assets/arrow-up.svg'
import arrowDown  from '../../assets/arrow-down.svg'

const Posts = () => {
    return (
        <>
        <div className={localPosts.postsContainer}>
            <h2>The traditional Chines soupe for today night</h2>
                <div className={localPosts.containerDetails}>

                    <div className={localPosts.detailsPost}>
                        <img src={profile1} alt="Profile picture of user"/>
                        <p>Hana Wagner</p>
                    </div>
        
                    <p>2hours</p>
                </div>


            <img src={imgSoupe} alt="Traditional soupe from Chine" />
            <p>To make a delicious soup, you will need carrots, celery, onions, garlic, vegetable broth, tomatoes, and fresh herbs.</p>

            <div className={localPosts.containerActionLinks}>
                <div className={localPosts.actionLinkVote}>
                    <img src={arrowUp} alt="Vote for the Article" />
                        <p>34</p>
                    <img src={arrowDown} alt="Vote for the Article" />
                </div>

                <div className={localPosts.actionComment}>
                    <img src={comment} alt="How many comments" />
                    <p>28</p>
                </div>

                <div className={localPosts.actionComment}>
                    <img src={share} alt="You can share the article" />
                    <p>Share</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Posts;