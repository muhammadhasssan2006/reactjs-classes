import React from "react";

const Button = (data) => {

    console.log(data.label)
  return <button>{data.label}</button>;
};

export default Button;
