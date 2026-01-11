import React, { useState } from 'react'
import Input from '../input/Input'

const Signup = () => {
    const [name,setName] = useState();
    const [city,setCity] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

    const submit = ()=>{
        console.log(name)
        console.log(city)
        console.log(email)
        console.log(password)
    }
  return (
    <>
      <Input  ONchange={(e)=>{setName(e.target.value)}} label='Name'  type='text'/>    
      <Input  ONchange={(e)=>{setCity(e.target.value)}} label='City'  type='text'/>  
      <Input  ONchange={(e)=>{setEmail(e.target.value)}} label='Email'  type='email'/>  
      <Input  ONchange={(e)=>{setPassword(e.target.value)}} label='Password'  type='password'/> 
      <button className='btn btn-primary mt-3 w-100' onClick={submit}>Submit</button> 
    </>
  )
}

export default Signup
