import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './components/signup/Signup';
import Login from './components/login/Login';



function App() {

  return (
    <>
      {/* <Signup/> */}
      {/* for single state  */}
      {/* path/ & index are same */}
      {/* path='*' is for page  not found */}
      {/* when we made child route we remove "/" from them */}
      {/* we call self closing outlet element in parent component of nested routes which show the content of child components  */}
      {/* in this case we see the content of both dashboard and its childs we  make another route with path index and add the whole content od dashboard init so we see the contect of dashbaord seprately and the contect of child seprately   */}


      <Login />

    </>
  )
}

export default App
