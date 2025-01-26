import localPosts from './localPosts.module.css';

import imgSoupe from '../../assets/soupe.jpg'
import profile1 from '../../assets/profile1.png'
import profile2 from '../../assets/profile2.png'

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
        </div>
        </>
    )
}

export default Posts;