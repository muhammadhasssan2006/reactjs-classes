import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  let nagivate =useNavigate();

  return (
    <>
    <h1>home page </h1>

    <button onClick={()=> nagivate("/about")}>About </button>
    <button onClick={()=> nagivate("/contact")}>contact </button>
      
    </>
  );
}

export default Home;
