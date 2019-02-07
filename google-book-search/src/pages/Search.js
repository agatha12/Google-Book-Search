import React, { Component } from "react";
import SearchForm from "../components/SearchForm/SearchForm"

    class Search extends Component {
        state = {
            search: "",
            books: []
        }


render () {
    return (
        <div>
            Search Page
            <SearchForm></SearchForm>
        </div>
    )
}
}

export default Search;