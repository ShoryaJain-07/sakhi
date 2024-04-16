import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from './Layout.jsx';
import Home from './components/Home/Home.jsx'
import Contact from './components/Contact/Contact.jsx';
import About from './components/About/About.jsx';
import Blogs from './components/Blogs/Blogs.jsx';
import Login from './components/Login/Login.jsx';
import Quiz from './components/Quiz/Quiz.jsx';
import Tracker from './components/Tracker/Tracker.jsx';



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="tracker" element={<Tracker />} />        
      </Route>
      <Route path="login" element={<Login />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);