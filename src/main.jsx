import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout';
import About from "./components/About/About";
import Home from './components/Home/Home';
import './index.css'
// import Courses from "./components/Courses/Courses";
// import Contact from "./components/Contact/Contact";


const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      {/* <Route path='solution' element={<Courses />} />
      <Route path='contact' element={<Contact />} /> */}
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
