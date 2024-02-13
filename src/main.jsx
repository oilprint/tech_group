import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import About from './About';
import Courses from './Courses';
import Contact from './Contact';
import ErrorPage from './ErrorPage';
import './index.css'


const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />}/> 
      <Route path='courses' element={<Courses />} />
      <Route path='contact' element={<Contact />} />
      <Route path='*' element={<ErrorPage />} />
    </Route> 
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
