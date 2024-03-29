import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Layout from './Layout';
import { Home, About, Courses, Contact, ErrorPage, SingleCourse } from './pages';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'courses',
        element: <Courses />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'courses/:id',
        element: <SingleCourse />,
      },
      {
        path: '/:id',
        element: <SingleCourse />,
      },
    ],
  },
]);

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//       <Route index element={<Home />} />
//       <Route path="about" element={<About />} />
//       <Route path="courses" element={<Courses />} />
//       <Route path="contact" element={<Contact />} />
//       <Route path="*" element={<ErrorPage />} />
//     </Route>,
//   ),
// );

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
