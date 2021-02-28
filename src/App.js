import './App.css';
import axios from 'axios';
import React, { Component, useState, useEffect } from 'react'
import Image from './components/Image'
import Header from './components/Header'
import Search from './components/Search'


const App = () => {

  const [employees, setEmployees] = useState([])

  useEffect(() => {
    const getEmployees = async () => {
      const EmployeesFromServer = await fetchEmployees()
      setEmployees(EmployeesFromServer);
    }
    getEmployees()
  }, [])

  const fetchEmployees = async () => {
    const res = await fetch('https://randomuser.me/api/?results=50')
    const data = await res.json()
    let list = data.results;
    return list
  };

  // getEmployee();
  return (
    <>
      <Header />
      <Search />
    <div className="row container">
      {employees.map((employee) => (       
      <Image  employee={employee} />
      ))}

    </div>
  </>
  )
}

export default App


