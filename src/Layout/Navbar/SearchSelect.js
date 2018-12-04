import React from "react";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" }
];

const SearchSelect = () => (
  <div className="select">
    <Select options={options} />
  </div>
);

export default SearchSelect;
