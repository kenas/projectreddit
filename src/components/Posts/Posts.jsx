const postsData = [
    {
      id: 1,
      title: "The traditional Chinese soup for tonight",
      author: "Hana Wagner",
      timeAgo: "2 hours ago",
      image: "../../assets/soupe.jpg", // Add the path of the image
      content: "To make a delicious soup, you will need carrots, celery, onions, garlic, vegetable broth, tomatoes, and fresh herbs.",
      votes: 34,
      comments: 28,
    },
    {
      id: 2,
      title: "Exploring the Show of Scenic Landscapes",
      author: "Thomas Makalu",
      timeAgo: "6 hours ago",
      image: "../../assets/show-ladscape.jpg", // Add the path of the image
      content: "Landscapes have long been a source of inspiration for artists, photographers, and travelers alike...",
      votes: 189,
      comments: 12,
    },
    {
        id: 3,
        title: "Scenic Landscapes",
        author: "Cobra",
        timeAgo: "46 hours ago",
        image: "../../assets/show-ladscape.jpg", // Add the path of the image
        content: "and travelers alike...",
        votes: 189,
        comments: 12,
      }
  ];


import Post from './Post/Post';
import localPostsStyles from './localPosts.module.css';

const Posts = () => {
    return (
        <div className={localPostsStyles.postsContainer}>
        {postsData.map((post) => {
            return (
                
                <Post 
                    post={post}
                    key={post.id}
                />
              

            )
        })}
        
        </div>
    )
}

export default Posts;