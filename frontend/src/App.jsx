import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Index from "./pages/Index";
import Layout from "./pages/Layout";
import Main from "./pages/Main";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Templates from "./components/Templates";
import CreateDesign from "./components/CreateDesign";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { 
        path: "/", 
        element: <Home /> 
      },
      { 
        path: "/projects", 
        element: <Projects /> 
      },
      { 
        path: "/templates", 
        element: <Templates /> 
      },
    ]
  },
  {
    path: "/design/create",
    element: <CreateDesign />
  },
  {
    path: "/design/:id/edit",
    element: <Main />
  }
]);

function App() {
  return <RouterProvider router={router} />
}

export default App
