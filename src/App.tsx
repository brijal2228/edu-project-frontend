import React from "react";
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Login from "./components/login";
import Registration from "./components/register";
import Books from "./components/books";
import Notes from "./components/notes";
import UserProfile from "./components/userprofile";
// import Profile from "./components/userprofile";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  {path:"/notes",element:<Notes/>},
  { path: "/register", element: <Registration/> },
  { path: "/books", element: <Books /> },
]);

const App: React.FC = () => {
  return (
    <>
     <UserProfile/> 
      <Navbar /> 
      <div > 
        <RouterProvider router={router} />
      
      </div> 
    </>
  );
};

export default App;
