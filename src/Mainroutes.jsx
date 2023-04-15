import React from "react";
import { Suspense } from "react";
import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "./Home";
import Heading from "./Heading";
import Fetures from "./Fetures";
import Pricing from "./Pricing";
import Example from "./Example";
const Classcomponant = React.lazy(() => import('./Componants/Classcomponant/ClassRoute'))
const Functioncomponant = React.lazy(() => import('./Componants/Functioncomponant/FunctionRoute'))
  
const Mainroutes = createBrowserRouter([
    {
      path: "/",
      element: <Heading/>,
    },
    {
      path: "/Home",
      element: <Home/>,
    },
    {
      path: "/Fetures",
      element: <Fetures/>,
    },
    {
      path: "/Pricing",
      element: <Pricing/>,
    },
    {
      path: "/Example",
      element: <Example/>,
      children: [
        {
          path: "Classcomponant/*",
          element:  <Classcomponant/>
        ,
        },
        {
          path: "Functioncomponant/*",
          element: <Functioncomponant/>
        },
      ],
    },
  ]);

  export default Mainroutes;
  

