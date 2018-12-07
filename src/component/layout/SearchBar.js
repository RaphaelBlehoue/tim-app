import React from "react";

const SearchBar = () => (
  <form className="mt-2 ml-2">
    <div className="form-group">
      <div className="input-group">
        <input
          type="text"
          className="form-control form-control-lg alpha-grey wmin-400"
          placeholder="Rechercher un article"
        />
        <span className="input-group-append">
          <button type="submit" className="btn btn-primary bg-danger  btn-lg">
            <i className="icon-search4" />
          </button>
        </span>
      </div>
    </div>
  </form>
);

export default SearchBar;
