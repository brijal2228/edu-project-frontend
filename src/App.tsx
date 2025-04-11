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
  { path: "/", element: <Home /> as React.ReactNode },
  { path: "/login", element: <Login /> as React.ReactNode },
  { path: "/notes", element: <Notes /> as React.ReactNode },
  { path: "/register", element: <Registration /> as React.ReactNode },
  { path: "/books", element: <Books /> as React.ReactNode },
]);

const AppContent: React.FC = () => {
  const location = window.location.pathname; // Using window.location for route detection

  // Check if the current route is '/login' or '/register'
  const showNavbar = !["/login", "/register"].includes(location);

  return (
    <>
    {/* <Profile/> */}
      <Navbar /> 
      <div > 
        <RouterProvider router={router} />
      </div>
    </>
  );
};

const App: React.FC = () => {
  return <AppContent />;
};

export default App;
