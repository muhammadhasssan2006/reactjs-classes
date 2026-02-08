import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Signup from "./components/Signup";

function App() {
  // class:10
  // Tailblocks give free components
  // usage:

  // Flowbite Blocks also gives components

  // Firebase database:=
  // cloude fireatore database:= 
  // Data save methods:
  // 1)setDoc() ko ham id datey hn 
  // import fireStore method and initlize it  
  // phir setDoc() method ya method 3 cheza lata ha db,collection,uid or inka bahir object 
  // 2)addDoc() auto generate id 

  // protected routing:=
  // login ki id browser ma save hoti ha jis ka behalf pr decide hgota ha user login ha  ya logout ya ham localstorege,       session Storage , ya cookies ma sa kesi sa bi save krwa sakta hn agr yahan id save aa tab tk    user login ha nhi to logout

  // => jin elements ko protect krna ha unha route elemet ka andr rakhna ha
  // phir localStorage ma save krwani ha id or is pr condition chala kr ham routes ka sath khala ga

  return (
    <>
      <Header />
      <HeroSection />
      <Signup />
    </>
  );
}

export default App;
