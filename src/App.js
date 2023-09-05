import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Routes, Route, createBrowserRouter , RouterProvider} from "react-router-dom";
import Layout from './components/layout/Layout';
import {Home ,About , Erorrpage , Servies ,OurWork , Contact , SingleProduct} from "./components/pages/index"
const App = () => {

 


/*   const handleCopy = (event) => {
    event.preventDefault()
    alert('Copying content from this site is not allowed.')
  }

  useEffect(() => {
    window.addEventListener('copy' ,handleCopy)
    return () =>{
      window.removeEventListener('copy', handleCopy)
    }
  
  },[]) */
const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout />,
    errorElement:<Erorrpage />,
    children:[
      {
       element: <Home />,
        index:true,
        
      },
      {
        path:"about",
        element: <About/>
        
      },
      {
        path:"servies",
        element: <Servies />
        
      },
      {
        path:"our-work",
        element: <OurWork />
        
      },
      {
        path:"contact",
        element: <Contact />
        
      },
      {
        path:"SingleProduct/:id",
        element: <SingleProduct />
        
      },
    ]

  },
])
  return (
    <React.Fragment>
    <RouterProvider  router={router}/>
    </React.Fragment>
  );
}

export default App;
