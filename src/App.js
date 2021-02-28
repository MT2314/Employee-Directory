import './App.css';
import React, { Component, useState, useEffect } from 'react'
import Table from './components/Table'
import Header from './components/Header'
import Search from './components/Search'
import axios from "axios";
import API from "./components/util/API";

const App =  () => {

  let employees = [];
  let retrieved = [];


  const getEmployees = () => {
    retrieved = localStorage.getItem('employees');
    if (retrieved) {
      employees = JSON.parse(retrieved);
      console.log(employees)
    }
    else {
      API.search()
        .then(res => {
          retrieved = localStorage.setItem('employees', JSON.stringify(res.data.results));
          employees = res.data.results;
          window.location.reload(); 
        })
        .catch(err => console.log(err));
    }
  }
  getEmployees()



  return (
    <>
      <Header />
      <Search employees={employees} />
      <Table employees={employees} />
    </>
  );
}


export default App


