// module imports
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// ----------------------------------------

//Components Import
import About from "./components/About";
import Navbar from "./components/Navbar";

// ----------------------------------------


const router = createBrowserRouter([
  {
    path: "/",
    element: <> <App/> </>
  },  
  {
    path: "/about",
    element:<><Navbar/> <About/></>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
