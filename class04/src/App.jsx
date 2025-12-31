import React, { useState } from "react";

const App = () => {
  // rendering condition

  // react hook :--
  // main hook :-- useState()

  // its identity is "use" keyword

  // purpose:-- create variable and update variable
  // ==> it give us array which contain value and function
  // ==>i can update variable value using its function which is   given in userState arry
  // ==>useState variables are temporary stored  in memory
  // ==>we name function set in use state
  // we can check condition in function argumernt too

  // npm run build  


  // let [name,func] = useState("hassan");
  // console.log(name);

  // let update_name = ()=>{
  //   func("Muhammad Hassan")
  // }

  // let [isLoggedIn, setIsloggedIn] = useState(false);

  // const update = () => {
  //   setIsloggedIn(!isLoggedIn);
  // };

  let [isON, setISon] = useState(false);

  const Switch = ()=>{
    setISon(!isON)

  }

  return (
    // <>
    // <h1>{name }</h1>
    // <button onClick={update_name}> update</button>
    //  </>

    // <div>
    //   {isLoggedIn ? (
    //     <>
    //       <h1>Dashboard</h1>
    //       <h2>welcome user</h2>
    //     </>
    //   ) : (
    //     <h1>App</h1>
    //   )}
    //   <button onClick={update}>{isLoggedIn ? "logout" : "login"}</button>
    // </div>
    <div>
      {
        isON ? 
        <img width={200} src="https://thumbs.dreamstime.com/b/glowing-yellow-light-bulb-as-inspiration-concept-vector-illustration-39356511.jpg" alt="" />
        :
        
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9kN2bfir11tHuODzQzBsXeeD5-RnMome_eg&s" alt="" />
   
      }

      <button style={{padding:8 , width: 60}} onClick={Switch}>{isON?"off":"on"}</button>
    </div>
  );
};

export default App;
