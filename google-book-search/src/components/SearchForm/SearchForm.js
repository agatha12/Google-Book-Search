import React from "react";
import "./SearchForn.css"

function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="breed">Book Title:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="search"
          type="text"
          className="form-control"
          placeholder="The Great Gatsby"
          id="searchTerm"
        />
        <br></br>
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
         Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;