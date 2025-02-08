import { Link } from "react-router-dom";

const Subreddit = ({sub}) => {
    return (

            <li>   
                <img src={sub.icon} alt="" /><Link to='/subreddits/:subreddit'>{sub.name}</Link>
            </li>
    )
}

export default Subreddit;