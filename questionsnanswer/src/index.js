import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home';
import MyContribution from './pages/myContribution';
import Inputs from "./pages/inputs"
import AboutMe from "./pages/aboutMe"

const router = createBrowserRouter([
  {
      path: "/",
      element: <App />,
      children:[
          {
              path:'/Home',
              element: <Home />
          },
          {
              path:'/MyContribution',
              element: <MyContribution />
          },
          {
            path:'/NewQuestion',
            element: <Inputs />
          },
          {
            path:'/AboutMe',
            element: <AboutMe />
          },
      ]        
  },
]);

ReactDOM.render(<RouterProvider router={router} />, document.getElementById('root'));

reportWebVitals();
