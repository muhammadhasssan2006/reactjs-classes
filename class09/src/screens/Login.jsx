import { Try } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import auth from "../config/Firebase";

const Login = () => {

    const [email,setEmail] = useState("")
    const [password,setpassword] = useState("")
    const submit = ()=>{
        try{
            signInWithEmailAndPassword(auth,email,password)
            .then((res) => {
                console.log(res)
                
            })
            .catch((error) => {
                console.log(error)
            })

        }
        catch(error){
            console.log(error)

        }
        
    }
    

  return (
    <>
      <h1>login page</h1>
    
      <TextField onChange={(e)=>setEmail(e.target.value)}  id="outlined-basic" label="Email" variant="outlined" />
      <br />
      <br />

      <TextField onChange={(e)=>setpassword(e.target.value)} id="outlined-basic"  label="Password" variant="outlined" />
      <br />
      <br />
      <Button onClick={submit} variant="contained">Login</Button>
    </>
  );
};

export default Login;
