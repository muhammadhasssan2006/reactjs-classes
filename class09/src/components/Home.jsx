import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const nevigate = useNavigate()
    const togoSignupPage = ()=>{
        nevigate("/signup")
    }
  return (
    <>
      <h1 className='text-5xl underline'>Home page</h1>

      <Button onClick={togoSignupPage} >signup</Button>
    </>
  )
}

export default Home
