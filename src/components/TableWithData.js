import BootStrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import React, { useState, useEffect } from "react";
import { link } from "react-router-dom";
import axios from "axios";
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css'
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
const columns = [
  {
    dataField: "name.first",

    text: "First Name",
    sort: true,
    filter: textFilter()
  },
  {
    dataField: "name.last",
    text: "Last Name",
    sort: true,
  },
  {
    dataField: "email",
    text: "email",
  },
];

const TableWithData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=25")
      .then((response) => {
        setData(response.data.results);
        console.log(response.data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <BootStrapTable
      keyField="email"
      data={data}
      columns={columns}
      striped
      hover
      condensed
      pagination={paginationFactory()}
      filter = {filterFactory()}
    />
  );
};

export default TableWithData;