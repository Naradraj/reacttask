import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Page/Home/Home';
import Course from './Page/Course/Course';
import About from './Page/About/About';
import Courses from './Page/Courses/Courses';
import Contact from './Page/Contact/Contact';
import Courseinfo from './Page/Courses/courseinfo';
import Maincontext from './Page/Context/Maincontext';

let route=createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'product/:id',
    element:<Course/>
  },
  {
    path:'/about',
    element:<About />
  },
  {
    path:'/courses',
    element:<Courses />
  },
  {
    path:'/contact',
    element:<Contact/>  
  },
  {
    path:'/courseInfo/:id',
    element:<Courseinfo/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Maincontext>
    <RouterProvider router={route} ></RouterProvider>
  </Maincontext>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
