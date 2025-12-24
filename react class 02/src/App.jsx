import React from "react";
import Button from "./Components/Button";
import Input from "./Components/Input";

const App = () => {
  // we write our js code above from return and call it in '{}' of react js which is in return
  // <> </> --- react fragment
  let name = "Hassan";
  let obj = {
    textAlign: "center",
    backgroundColor: "red",
    padding: "10px",
  };
  return (
    <div>
      <>
        {/* <h1>{name}</h1>
        <h1 style={obj}>Hello react</h1>
        <p className="para">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          possimus, obcaecati corporis impedit dolor velit expedita nam dolores
          doloremque labore?
        </p>

        <img src="/vite.svg" alt="" /> */}
        <br /><br /><br /><br />
        <Input placeholder="Enter name" type="text" label="Enter Name:"/> <br /><br />
        <Input placeholder="Enter email" type="email" label="Enter Email:"/> <br /><br />
        <Input placeholder="Enter password" type="password" label="Enter Password:"/>
        <br />  <br />

        <Button label="login"    />
        <br />  <br />
        <Button label="logout" />
        <br />
      </>
    </div>
  );
};

export default App;
