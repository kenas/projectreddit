import { Outlet } from "react-router-dom";

import NavBar from '../components/NavBar/NavBar';
import News from '../components/News/News';
import Posts from '../components/Posts/Posts';
import Aside from '../components/Subreddits/Subreddits';

const Root = () => {
    return (
        <>
         <NavBar />
      <header>  
        <News/>
      </header>
      <main>
      {/* <Outlet />  */}
        <Posts />
        <Aside />
      </main>
        </>
        
    )
}

export default Root;