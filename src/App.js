import React, { useState, useEffect } from "react";
import SearchInput from "./components/SearchInput"
import Home from "./containers/Home";
import Table from "./containers/Table"
import { getEmployeeList } from "./utils/API";

function App() {
  const [empList, setEmpList] = useState([]);
  const [empsToDisplay, setEmpsToDisplay] = useState([]);

  useEffect(() => {
    getEmployeeList().then(({ data: { results } }) => setEmpList(results));
  }, []);

  return (
    <div className="App">
      <Home/>
      <SearchInput employees={empList} updateEmployees={setEmpsToDisplay}/>
      <Table employees={empsToDisplay} />
    </div>
  );
}

export default App;
