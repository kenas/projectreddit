import NavBar from '../src/components/NavBar/NavBar';
import News from '../src/components/News/News';
import Posts from '../src/components/Posts/Posts';
import Aside from '../src/components/Subreddits/Subreddits';
import './App.css'


function App() {

  return (
    <>
      <NavBar />
      <main>
      <News/>
       <Posts />
      <Aside />
      </main>

    </>
  )
}

export default App
