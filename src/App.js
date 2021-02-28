import './App.css';
import React, { Component, useState, useEffect } from 'react'
import Table from './components/Table'
import Header from './components/Header'
import Search from './components/Search'
import axios from "axios";
import API from "./components/util/API";

const App = () => {


  const [employees, setEmployees] = useState([])
  let retrieved = [];

  useEffect(() => {

    const getEmployees = async () => {
      retrieved = localStorage.getItem('employees');
      if (retrieved) {
        let parsed = JSON.parse(retrieved)
        setEmployees(parsed);
        console.log(employees)
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

  const fetchEmployees = async () => {
    const res = await API.search();
    const data = res.data.results
    return data
  };
    return (
      <>
        <Header />
        <Search employees={employees} />
        <Table employees={employees} />
      </>
    );
  }


  export default App


