import { Try } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import React, { useState } from "react";
import auth from "../config/Firebase";
import { toast } from "react-toastify";

const Signup = () => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const submit = () => {
    try {
      createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
          console.log(res);
          toast.success("🦄 Signup successfully!", {
            position: "bottom-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        })
        .catch((error) => {
          console.log(error);
          toast.error("invalid email ", {
            position: "bottom-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        });
    } catch (error) {
      console.log(error);
    }
  };
  const handleGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGithub = () => {
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <h1 className="text-4xl">Signup page</h1> 
      <br />
      <TextField
        onChange={(e) => setName(e.target.value)}
        id="outlined-basic"
        label="Name"
        variant="outlined"
      />
      <br />
      <br />
      <TextField
        onChange={(e) => setCity(e.target.value)}
        id="outlined-basic"
        label="City"
        variant="outlined"
      />
      <br />
      <br />
      <TextField
        onChange={(e) => setEmail(e.target.value)}
        id="outlined-basic"
        label="Email"
        variant="outlined"
      />
      <br />
      <br />

      <TextField
        onChange={(e) => setpassword(e.target.value)}
        id="outlined-basic"
        label="Password"
        variant="outlined"
      />
      <br />
      <br />
      <Button className="wid" onClick={submit} variant="contained">
        Signup
      </Button>
      <br />
      <br />
      <Button onClick={handleGoogle} variant="contained">
        Signup with google
      </Button>
      <br />
      <br />
      <Button onClick={handleGithub} variant="contained">
        Signup with Github
      </Button>
    </>
  );
};

export default Signup;
