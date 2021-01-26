import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import "../styles.css";



const Table = ({ employees }) => {
  // const [employeeList, setEmployeeList] = useState([]);

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

  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

 

  const { items, requestSort, sortConfig } = useSortableData(employees);


  return (
    <div>
      <table className="table" id="myTable">
        <thead className="thead-light">
          <tr>
            <th>Profile Pic</th>
            <th>Title</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th onClick={() => requestSort("email")}
                className={getClassNamesFor("email")}>
              {/* <button
                type="button"
                onClick={() => requestSort("email")}
                className={getClassNamesFor("email")}
              ></button> */}
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
    </div>
  );
};

export default Table;
