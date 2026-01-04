import React from 'react';
import { useParams } from 'react-router-dom';

const Singleuser = () => {
    
   let {id} =useParams();

//    console.log(param)
  return (
    <>

    <h1>single user</h1>
    <p>get single user:<strong>{id}</strong> </p> 
      
    </>
  );
}

export default Singleuser;
