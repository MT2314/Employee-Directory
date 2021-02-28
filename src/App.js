import './App.css';
import React, { Component, useState, useEffect } from 'react'
import Table from './components/Table'
import Header from './components/Header'
import SearchBox from './components/SearchBox/SearchBox'
import axios from "axios";
import API from "./components/util/API";

const App = () => {


  const [employees, setEmployees] = useState([])
  const [count, setCount] = useState(0);
  const [searchField, setSearch] = useState("");
 
  useEffect(() => {

    const getEmployees = async () => {
      let retrieved = localStorage.getItem('employees');
      if (retrieved) {
        let parsed =  JSON.parse(retrieved)
        setEmployees(parsed);

      }
      else {
        const list = await fetchEmployees();
        let stringStore = JSON.stringify(list)
        localStorage.setItem('employees', stringStore);
        setEmployees(list);
        
      }
    }
    getEmployees()
  }, [])



  
  const sortArray = () => {
    if (count % 2 == 0) {
      let sortemployees = employees.sort((a, b) => a.name.first.localeCompare(b.name.first));
      setEmployees([...sortemployees]);
      setCount(count + 1);
    }else{
      let sortemployees = employees.sort((a, b) => b.name.first.localeCompare(a.name.first));
      setEmployees([...sortemployees]);
      setCount(count + 1);

    }
  }


  // const handleInputChange = event => {
  //   setSearch(event.target.value);
  // };

  const fetchEmployees = async () => {
    const res = await API.search();
    const data = res.data.results
    return data
  };

 
  const filteredEmployees = employees.filter(employee => {
    employee = (employee.name.first.toLowerCase());
    let search = (searchField.toLowerCase());
    return employee.includes(search);
  })

  return (
    <>
      <Header />
      <SearchBox placeholder = "Search" handleChange = { (e) => {
        setSearch(e.target.value) 
      }}/>
      <Table onClick={sortArray} key = {1}  employees = {filteredEmployees}/>
    </>
  );
}


export default App


