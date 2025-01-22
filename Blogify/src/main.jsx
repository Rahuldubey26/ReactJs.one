import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from "./store/store.js"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AuthLagout from './components/AuthLagout';
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import AllPosts from './pages/AllPosts';
import AddPost from './pages/AddPost';
import EditPost from './pages/EditPost';
import Post from './pages/Post';
import Home from "./pages/Home.jsx"
const router = createBrowserRouter ([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/login",
        element:(
          <AuthLagout authentication={false}>
            <Login/>
          </AuthLagout>
        )
      },
      {
        path:"/signup",
        element:(
          <AuthLagout authentication={false}>
            <Signup/>
          </AuthLagout>
        )
      },
      {
        path:"/all-posts",
        element:(
          <AuthLagout authentication={" "}>
            <AllPosts/>
          </AuthLagout>
        )
      },

      {
        path:"/add-post",
        element:(
          <AuthLagout authentication={" "}>
            <AddPost/>
          </AuthLagout>
        )
      },

      {
        path:"/edit-post/:slug",
        element:(
          <AuthLagout authentication={" "}>
            <EditPost/>
          </AuthLagout>
        )
      },
      {
        path:"/post/:slug",
        element:(
          <AuthLagout authentication={" "}>
            <Post/>
          </AuthLagout>
        )
      },
    ]

  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
