import React from 'react';
import { useSearchParams } from 'react-router-dom';

const Allusers = () => {
    let {query,query_func} = useSearchParams();

    let value  = query.get("id")

    console.log(value)
  return (
    <>
    <h1>All users</h1>
      
    </>
  );
}

export default Allusers;
