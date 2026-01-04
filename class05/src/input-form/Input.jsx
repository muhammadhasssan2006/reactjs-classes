import React, { useState } from "react";

const Input = () => {
    const [name,setName]= useState("");

    let submit = ()=>{
        console.log(name)
    }
  return (
    <>
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Enter name"
      />
      <button onClick={submit}>Submit</button>
    </>
  );
};

export default Input;
