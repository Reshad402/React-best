import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './Components/Abbut/About';

import Contract from './Components/Contract/Contract';
import FriendDetails from './Components/FriendDetails/FriendDetails';
import Friend from './Components/Friends/Friend';
import Gorus from './Components/Gorus/Gorus';
import Home from './Components/Home';
import PostDetails from './Components/PostDeetails/PostDetails';

import Posts from './Components/Posts/Posts';


import Product from './Components/Products/Product';
import Main from './Layout/Main';

function App() {
  const madeRouter = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        { path: '/abo', element: <About></About> },
        { path: '/contract', element: <Contract></Contract> },


        {
          path: '/friend',
          loader: async () => {
            return fetch(`https://jsonplaceholder.typicode.com/users`);
          },
          element: <Friend></Friend>,

        },
        {
          path: '/friend/:friendId',
          loader: async ({ params }) => {
            // console.log(params.friendId)
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
          },
          element: <FriendDetails></FriendDetails>
        },

        {
          path: '/allPosts',
          loader: async () => {
            return fetch(`https://jsonplaceholder.typicode.com/posts`)
          },
          element: <Posts></Posts>
        },

        {
          path: '/post/:postId',
          loader: async ({ params }) => {
            return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
          },
          element: <PostDetails></PostDetails>
        },

        { path: '/gorus', element: <Gorus></Gorus> },
      ]

    },
    { path: 'home', element: <Home></Home> },
    { path: 'product', element: <Product></Product> },
    { path: '*', element: <div>Sorry vai link nai</div> },

  ])
  return (
    <div className="App">
      <RouterProvider router={madeRouter}>

      </RouterProvider>
    </div>
  );
}

export default App;
