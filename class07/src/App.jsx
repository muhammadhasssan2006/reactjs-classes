import { useEffect, useState } from "react";
import AppBar from "./components/Appbar";
import { Margin, Padding } from "@mui/icons-material";
import "./App.css";
import Card from "./components/card";
import Cards from "./components/card";
import { Box, Paper, TextField, Typography } from "@mui/material";
import axios from "axios";
// import AppBar from './components/Appbar'
function App() {
  // const [counter,setcounter] = useState(0)
  // const count=()=>{
  //   setcounter(counter +1)
  // }

  // useEffect(()=>{
  //  console.log("event called...");

  // },[counter])

  // Axois.get():-
  const [productData,setproductData]=useState([])
  useEffect(()=>{
    try {
      
      axios.get("https://fakestoreapi.com/products")
      .then((res) => setproductData(res.data));
    } catch (error) {
      console.log(error)
      
    }

  },[])

  console.log(productData)

  return (
    // --> material ui library
    //  we have to install two  commands one is default command and other is  icon command.
    //  we should use one eihter MUI or tailwind css.
    //  we  use sx={{properties}} for inline css in MUI.
    //  varient:-
    //  it conrrol the behaviour of input.
    //  paper:-
    //  paper is like a container in side body like div, its elivation value shows its box shadow.
    //  typography:-
    //  typography is used to create text like h1,p,ie= <Typography varientt ="h2">hello</Typography>
    //  Box:-
    //  Box is same as div element ,box comes with some style and responsive.
    // --> tailwind css
    // --> shadcn

    //  we learing react version 19.
    //  versoin 16 introduced tese life cycles and introduced useEffect hoook which made word easy, this single hook is doing work of
    //  thesethree life cycles
    //  interview question:-
    //  react component life cycle, we learn 3 life cycle now these are in every component
    //  1) component mount
    //  component is created now.
    //  2) component mounting
    //  component is updated time to time
    //  3) component will unmount
    //  components work is done

    //  UseEffect hook:-
    //  it is used to call api,
    //  it take two things ()=>{} callback function and [] empty arry
    //  jis component ma use effect call hoga jab wo component render hoga to useeffect work kraga automatically
    //  asa koi bi kam jo page render hona pr automnatic krwana ho to ham useeffect use kra da.
    //  [empty array] is called empty depandancy array
    //
    //  axios:-
    //  axios is a library throught which we  call api , send, delete and edit.
    //  we have4 methods in axios
    //  1) axios.get
    //  2) axios.post
    //  3) axios.put
    //  4) axios.delete

    <>
      {/* <AppBar />
      <br />
      <br />
      <Cards  sx={{margin:10}}/>
      <br /><br />
      <Paper elevation={3} sx={{margin:10}}>
      <Typography variant="h4" sx={{margin:2}}>helo</Typography>
      <TextField label='name' sx={{margin:10}}></TextField> <br />
      <TextField label='name' sx={{margin:10}}></TextField> <br />
      <TextField label='name' sx={{margin:10}}></TextField> */}
      {/* </Paper> */}
      {/* <h1>hassan</h1> */}
      {/* <p>{counter}</p>
      <button onClick={count}>add</button> */}
      <div style={{display:"flex",justifyContent:"center",flexWrap:"wrap" , gap:20, margin:10}}>
        {productData && productData.map((value, index, array) => {
          return(
            <Cards imageSrc={value.image} title={value.title} desc={value.description}/>
          )
        })}
      </div>

    </>
  );
}

export default App;
