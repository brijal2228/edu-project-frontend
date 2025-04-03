import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/register";
import Books from "./components/books";
import Notes from "./components/notes";
// import UserProfile from "./components/userprofile";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  {path:"/notes",element:<Notes/>},
  { path: "/register", element: <Register /> },
  { path: "/books", element: <Books /> },
]);

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <div >
        <RouterProvider router={router} />
        {/* <UserProfile name={""} email={""} coursesEnrolled={[]}/> */}
      </div>
    </>
  );
};

export default App;
