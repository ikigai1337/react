import "./index.css";
import Employee from "./components/employee";
import React, { useState } from "react";
import {v4 as uuidv4} from 'uuid';
import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/EditEmployee";
import Header from "./components/Header";
import Employees from "./pages/Employees";


function App() {
 
  return <Employees />
}

export default App;
