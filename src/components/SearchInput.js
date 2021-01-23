import React, { useState, useEffect } from "react";

const SearchInput = ({ employees, updateEmployees }) => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filteredEmployees =
      searchTerm === ""
        ? employees
        : employees.filter(
            ({ name: { first } }) =>
              first.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0
          );

    updateEmployees(filteredEmployees);
  }, [searchTerm, employees]);

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        placeholder="filter by first name"
        title="Type in a name"
      ></input>
    </div>
  );
};

export default SearchInput;
