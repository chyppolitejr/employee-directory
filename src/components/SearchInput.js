import React from "react";

const SearchInput = () => {
  
  return (
    <div>
      <input
        type="text"
        id="myInput"
        onKeyUp="searchFunction()"
        placeholder="search for first names.."
        title="Type in a name"
      ></input>
    </div>
  );
};

export default SearchInput;
