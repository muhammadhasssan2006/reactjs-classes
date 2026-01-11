import React, { useState } from 'react'
import Input from '../input/Input'
import { Table } from 'react-bootstrap';

const Login = () => {
    const [userData,setuserDate] = useState({
        userName:"",
        email:"",
        password:"",
    });
    // console.log(userData);
    const [gatherData,setgatherData] = useState([])

    const showHandler=()=>{
        setgatherData([...gatherData,userData])
        console.log(gatherData)

    }

    

  return (
    <>
    <div className='mt-3 mx-5'>
      <h1>login</h1>
      <Input ONCHANGE={(e)=>setuserDate({...userData,userName:e.target.value})}  label='Name' type='text'/>
      <Input ONCHANGE={(e)=>setuserDate({...userData,email:e.target.value})}  label='email' type='email'/>
      <Input  ONCHANGE={(e)=>setuserDate({...userData,password:e.target.value})} label='password' type='password'/>
      <button onClick={showHandler}  className='btn btn-dark mt-3 w-100'>Submit</button>
    </div>
    <div>
         <Table responsive="lg" className='mt-4 mx-5'>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td>1</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            
          </tr>
          <tr>
            <td>2</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
           
          </tr> */}
        
        </tbody>
      </Table>
    </div>
    </>
  )
}

export default Login
