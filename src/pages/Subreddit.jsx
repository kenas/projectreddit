import { useSelector } from "react-redux"
import { useParams } from "react-router-dom";

const SubredditShowPage = () => {

    const {subreddit} = useParams();

    return (
        <>
        <p>The : {subreddit}</p>
        </>
    )


}

export default SubredditShowPage;