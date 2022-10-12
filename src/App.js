import React, {useState} from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CheckDetails from "./pages/CheckDetails";

function App() {
const [select, setSelect] = useState(null);
  return (
    <div>
     <Routes>
       <Route path="" element={<Home select={select} setSelect={setSelect}/>} />
       <Route path="/profile"  element={<CheckDetails select={select}/>}/>
     </Routes>
    </div>
  );
}

export default App;
