import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import { ToastContainer } from "react-toastify";
import './App.css'
import Home from "./components/Home";

function App() {
  // firebase authentication:-
  // 1:- first run command npm i firebase
  // 2:- create project on firebase & create webApp & register App
  // 3:=copy all configration keys
  // 4:- create a folder config anf file firebase.jsx & paste config keys
  // 5;-react toastify is a library used for alerts

  // animation:---
  // Gsap is for animation 
  // sherians coding school yt channel 

  // Tailwind css----
  // utility=first css framework means...?
  // follow documentation steps 
  // for coustom work we will use []

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>



      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
