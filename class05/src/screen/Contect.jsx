import React from 'react';
import { useNavigate } from 'react-router-dom';


const Contect = () => {
    let nagivate = useNavigate();
  return (
    <>

    <ul>
        <li>
            {/* <link >home</link> */}
        </li>
    </ul>

    <h1>Contact page</h1>
    <button onClick={()=> nagivate("/")}>home </button>
    <button onClick={()=> nagivate("/about")}>about </button>
      
    </>
  );
}

export default Contect;
