import React from "react";
import "./Results.css"

function SearchForm(props) {
  return (
<div className="bookdisplay">
    <div className="book">
      <h4>{props.title}</h4><br></br>
      <img className="bookimg" alt="not available" src={props.image}></img><br></br>
      <p>Authors: {props.authors}</p>
      <p>Description: {props.decription}</p>
      <a href={props.link}>View on Google Books</a><br></br>
      <button type="button" className="btn btn-primary" onClick={props.saveBook}>Save</button>
    </div>
</div>
  );
}

export default SearchForm;