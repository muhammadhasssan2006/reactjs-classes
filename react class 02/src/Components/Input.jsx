import React from 'react'

const Input = ({palceholder,label,type}) => {
    console.log(palceholder);
    
  return (
    <>
    <label htmlFor="">{label}</label>
   <input palceholder={palceholder} type={type}  />
    </>
  )
}

export default Input
