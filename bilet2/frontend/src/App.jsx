import React from 'react'
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Specials from './pages/Specials'
import Basket from './pages/basket/Basket'
import Admin from './pages/admin/Admin'


const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/products",
        element:<Products/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/specials",
        element:<Specials/>
      },
      {
        path:"/basket",
        element:<Basket/>
      },
      {
        path:"/admin",
        element:<Admin/>
      },
    ]
  }
])

function App() {

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
