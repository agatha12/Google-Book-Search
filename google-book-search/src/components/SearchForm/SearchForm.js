import React from "react";
import "./SearchForn.css"

function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
    <label>Search</label>
    <input type="text" className="form-control" id="searchTerm" value={props.search} onChange={props.handleInputChange} name="search" placeholder="ex.Harry Potter"></input>
  </div>
  <button onClick={props.handleFormSubmit} type="submit" className="btn btn-primary">Submit</button>
    </form>
    
  );
}

export default SearchForm;