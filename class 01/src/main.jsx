import { createRoot } from "react-dom/client";
import React from "react";

let div = document.getElementById("root");

let Header = () => {
  return (
    <h3>Header Component</h3>
  )
}

let Intro = () => {
  return (
    <p>React is an open-source JavaScript library for building user interfaces (UIs), particularly for single-page applications (SPAs) where data changes frequently.</p>
  )
}
let Image = () => {
  return (
    <img src="/vite.svg" alt="" />
  )
}
let Footer = () => {
  return (
    <h3>Footer Component</h3>
  )
}


createRoot(div).render(
  <div>
    <Header />
    <Intro />
    <Image />
    <Footer />

  </div>
);