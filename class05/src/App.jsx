import { Route, Routes } from "react-router-dom"
import Contect from "./screen/Contect"
import Home from "./screen/Home"
import About from "./screen/About"
import Allusers from "./screen/Allusers"
import Singleuser from "./screen/Singleuser"
import Input from "./input-form/Input"

function App() {

  return (
    <>
    {/* basic routing:-- */}
      {/* <Routes> */}
        {/* <Route path="/" element={<Home/>}/> */}
        {/* <Route path="/about" element={<About/>}/> */}
        {/* <Route path="/contact" element={<Contect/>}/> */}
        {/* <Route path="/Allusers" element={<Allusers/>}/> */}
        {/* <Route path="/Allusers" element={<Singleuser/>}/> */}
      {/* </Routes> */}

      <Input/>

      {/* dynamic routing:==  */}

    </>
  )
}

export default App
