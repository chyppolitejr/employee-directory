// import BootStrapTable from "react-bootstrap-table-next";
// import paginationFactory from "react-bootstrap-table2-paginator";
import React, { useState, useEffect } from "react";
import { link } from "react-router-dom";
import axios from "axios";
// import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css'
// import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';


const TableWithData = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=25")
      .then((response) => {
        setEmployees(response.data.results);
        console.log(response.data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <table className="table">
      <thead className="thead-light">
        <tr>
          <th>Profile Pic</th>
          <th>Title</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email Address</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {employees.map(employee => (
          <tr key={employee.login.uuid}>
            <td><img src={employee.picture.thumbnail} alt="profile"></img></td>
            <td>{employee.name.title}</td>
            <td>{employee.name.first}</td>
            <td>{employee.name.last}</td>
            <td>{employee.email}</td>
            <td>{employee.phone}</td>
          </tr>
        ))}
      </tbody>

    </table>
  );
};

export default TableWithData;