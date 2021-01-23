// import BootStrapTable from "react-bootstrap-table-next";
// import paginationFactory from "react-bootstrap-table2-paginator";
import React, { useState, useEffect, useMemo } from "react";
import { link } from "react-router-dom";
import axios from "axios";
import "../styles.css"
// import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css'
// import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

// Set Up sorting
const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = useState(config);

  const sortedItems = useMemo(() => {
    let sortableItems = [...items];

    console.log(sortableItems);

    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
          
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

const TableWithData = () => {
  const [employees, setEmployees] = useState([]);

  const getClassNamesFor = (name) => {
    if (!sortConfig){
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=25")
      .then((response) => {
        setEmployees(response.data.results);
        console.log(employees);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

   const {items,requestSort, sortConfig} = useSortableData(employees);
   
   
  return (
    <table className="table">
      <thead className="thead-light">
        <tr>
          <th>Profile Pic</th>
          <th>Title</th>
          <th>
            First Name
          </th>
          <th>Last Name</th>
          <th>
            <button
              type="button"
              onClick={() => requestSort("email")}
              className ={getClassNamesFor("email")}
            ></button>
            Email Address
            </th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.login.uuid}>
            <td>
              <img src={item.picture.thumbnail} alt="profile"></img>
            </td>
            <td>{item.name.title}</td>
            <td>{item.name.first}</td>
            <td>{item.name.last}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableWithData;
