import "./index.css";
import Employee from "./components/employee";
import React, { useState } from "react";

function App() {
  const [role, setRole] = useState("dev");
  const showEmployees = true;

  return (
    <div className="App">
      {showEmployees ? (
        <>
          <input></input>

          <Employee name="Caleb" role="Intern" />
          <Employee name="Walid" role="Millionaire" />
          <Employee name="SKE" role="APEH" />
        </>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
  );
}

export default App;
