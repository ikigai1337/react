import "../index.css";
import Employee from "../components/employee";
import React, { useState } from "react";
import {v4 as uuidv4} from 'uuid';
import AddEmployee from "../components/AddEmployee";
import EditEmployee from "../components/EditEmployee";
import Header from "../components/Header";


function Employees() {

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
        if (id == employee.id) {
          return { ...employee, name: newName, role: newRole };
        }

        return employee;
      });

      setEmployees(updatedEmployees);
  }

  function newEmployee(name, role, img){
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img,
    };
    setEmployees([...employees, newEmployee]);
  }


  const showEmployees = true;
  return (
    <div className="App bg-gray-300 min-h-screen">
      
      {showEmployees ? (
        <>

          <div className="flex flex-wrap justify-center my-2">
           {employees.map((employee) => {
            const editEmployee = <EditEmployee id={employee.id} name={employee.name} role={employee.role} updateEmployee={updateEmployee}/>
            return (
              <Employee
              key={employee.id}
              id = {employee.id}
              name={employee.name}
              role={employee.role}
              img={employee.img}
              editEmployee={editEmployee}
              />
              );
           }

           )}

          </div>

          <AddEmployee newEmployee={newEmployee}/>

        </>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
  );
}

export default Employees;
