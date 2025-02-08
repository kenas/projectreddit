import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Root from './root/Root';
import Subreddit from './pages/Subreddit';
import './App.css';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="subreddits/:subreddit" element={<Subreddit/>} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;