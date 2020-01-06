import React from "react";
import "./SearchBox.css";

const SearchBox = ({ placeholder, onChange, value }) => (
  <input
    className="SearchBox"
    onChange={onChange}
    type="search"
    placeholder={placeholder}
    value={value}
  />
);

export default SearchBox;
