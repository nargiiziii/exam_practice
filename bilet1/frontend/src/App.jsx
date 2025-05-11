import { createBrowserRouter, RouterProvider} from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import React from "react";
import Contact from "./pages/Contact";
import Basket from "./pages/Basket";
import ProdDetail from "./pages/ProdDetail";
import Admin from "./pages/Admin";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "/basket",
        element: <Basket/>,
      },
      {
        path: "/prodDetail/:id",
        element: <ProdDetail/>,
      },
    ],
  },
]);

function App() {
  return <>
  <RouterProvider router={router}/>
  </>;
}

export default App;
