import "./index.css";
import Employee from "./components/employee";
import React, { useState } from "react";
import {v4 as uuidv4} from 'uuid';


function App() {
  const [role, setRole] = useState("dev");
  const showEmployees = true;
  const [employees, setEmployees] = useState([
    {
      name: 'Jack',
      role: 'VP of Engineering',
      img: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
    {
      name: 'Lucy',
      role: 'UI/UX Designer',
      img: 'https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
    {
      name: 'Jennifer',
      role: 'Marekting Agent',
      img: 'https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
    {
      name: 'Luca',
      role: 'Video Editor',
      img: 'https://images.pexels.com/photos/1844547/pexels-photo-1844547.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
    {
      name: 'Keanu',
      role: 'HR',
      img: 'https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
    {
      name: 'Mariam',
      role: 'Backend Engineer',
      img: 'https://images.pexels.com/photos/2262810/pexels-photo-2262810.jpeg',
    },

  ])


  return (
    <div className="App">
      {showEmployees ? (
        <>
          <input></input>

          <div className="flex flex-wrap justify-center">
           {employees.map((employee) => {
            return (
              <Employee
              key={uuidv4()}
              name={employee.name}
              role={employee.role}
              img={employee.img}
              />
              );
           }

           )}

          </div>

        </>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
  );
}

export default App;
