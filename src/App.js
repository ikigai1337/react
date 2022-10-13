import "./index.css";
import Employee from "./components/employee";
import React, { useState } from "react";
import {v4 as uuidv4} from 'uuid';


function App() {
  const [role, setRole] = useState("dev");
  
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: 'Jack',
      role: 'VP of Engineering',
      img: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
    {
      id: 2,
      name: 'Lucy',
      role: 'UI/UX Designer',
      img: 'https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
    {
      id: 3,
      name: 'Jennifer',
      role: 'Marekting Agent',
      img: 'https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
    {
      id: 4,
      name: 'Luca',
      role: 'Video Editor',
      img: 'https://images.pexels.com/photos/1844547/pexels-photo-1844547.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
    {
      id: 5,
      name: 'Keanu',
      role: 'HR',
      img: 'https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
    {
      id: 6,
      name: 'Mariam',
      role: 'Backend Engineer',
      img: 'https://images.pexels.com/photos/2262810/pexels-photo-2262810.jpeg',
    },

  ])


  function updateEmployee(id, newName, newRole) {
      const updatedEmployees = employees.map((employee) => {
        if (id === employee.id) {
          return { ...employee, name: newName, role: newRole };
        }

        return employee;
      });

      setEmployees(updatedEmployees);
  }


  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
        <>
          <input
            type="text"
            onChange={(e)=>{
              console.log(e.target.value);
              setRole(e.target.value);
            }}
          />

          <div className="flex flex-wrap justify-center">
           {employees.map((employee) => {
            return (
              <Employee
              key={employee.id}
              id = {employee.id}
              name={employee.name}
              role={employee.role}
              img={employee.img}
              updateEmployee={updateEmployee}
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
