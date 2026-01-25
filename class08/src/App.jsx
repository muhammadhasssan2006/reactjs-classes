import React from "react";
// import { Route, Routes } from "@mui/icons-material";
import Tables from "./components/Table";
import Createuser from "./components/Createuser";
import { Route, Routes } from "react-router-dom";
// import './App.css'

function App() {
  // In class 08 we will  learn 4 methods of axios  for this we will use npm json library
  // steps:-
  // 1) run json library command
  // 2)  create file in main tree named db.json and insert all data
  // 3) open terminal and run commad npx json-server (file name) to open json server

  return (
    <>
      <Routes>
        <Route path="/Createuser" element={<Createuser />} />
      </Routes>
    </>
  );
}

export default App;
