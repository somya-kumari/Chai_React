import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Component/Home/home.jsx'
import About from './Component/About/about.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children:[{
      path: "",
      element: <Home/>
    },
    {
      path: "about",
      element: <About/>

    }
  
  ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)