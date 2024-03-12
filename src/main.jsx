import React from "react";
import ReactDOM from "react-dom";
import Signup from './Components/Signup/Signup.jsx'
import Login from './Components/Login/Login.jsx'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "../src/index.css";
import Printinfo from "./Components/Printinfo.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Signup />} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/Printinfo" element={<Printinfo/>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
