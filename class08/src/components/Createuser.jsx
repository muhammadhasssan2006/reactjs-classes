import React from 'react'
import axios from "axios"
import  { useEffect, useState } from "react"
import Tables from './Table'


const Createuser = () => {
     const [userData,setuserData]=useState([])
  try {
    useEffect(()=>{
      axios.get("http://localhost:3000/users")
      .then((res) => {
        setuserData(res.data)
      })

    },[])
  } catch (error) {
    console.log(error)
    
  }
  
  return (
    <Tables Data={userData}/>
  )
}

export default Createuser
