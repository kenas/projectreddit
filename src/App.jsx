import NavBar from '../src/components/NavBar/NavBar';
import News from '../src/components/News/News';
import Posts from '../src/components/Posts/Posts';
import Aside from '../src/components/Subreddits/Subreddits';


import {RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import './App.css'


function App() {

  const router = createBrowserRouter(createRoutesFromElements([

  ]));

  return (
    <>
      <NavBar />
      <header>  
        <News/>
      </header>
      <main>
        <Posts />
        <Aside />
      </main>
      < <RouterProvider router={router}/>

    </>
  )
}

export default App
