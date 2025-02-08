
const Subreddit = ({sub}) => {
    return (

            <li 
                key={sub}
                           
            >   
                <img src={sub.icon} alt="" /><a href="">{sub.name}</a>
            </li>
    )
}

export default Subreddit;