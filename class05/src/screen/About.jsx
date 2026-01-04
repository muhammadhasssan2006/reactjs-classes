import React from 'react';
import { useNavigate } from 'react-router-dom';


const About = () => {
    let nagivate = useNavigate();
  return (
    <>
    <h1>about page</h1>
    <button onClick={()=> nagivate("/")}>home </button>
    <button onClick={()=> nagivate("/contact")}>contact </button>
      
    </>
  );
}

export default About;
