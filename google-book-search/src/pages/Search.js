import React, { Component } from "react"
import axios from "axios"
import SearchForm from "../components/SearchForm/SearchForm"
import Results from "../components/Results/Results"

class Search extends Component {
    state = {
        search: "",
        books: []
    }

    handleInputChange = event => {
        this.setState({ search: event.target.value });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.search === "") {
            alert("You must enter a book title")
        }
        else {
            console.log(this.state.search)
            axios.get("https://www.googleapis.com/books/v1/volumes?q=" + this.state.search)
                .then(res => {
                    if (res.data.status === "error") {
                        throw new Error(res.data.message);
                    }
                    console.log(res.data.items[1])
                    const array = res.data.items.map((res, index) => ({
                        id: index,
                        title: res.volumeInfo.title,
                        authors: res.volumeInfo.authors,
                        description: res.volumeInfo.description,
                        image: res.volumeInfo.imageLinks.thumbnail,
                        link: res.volumeInfo.canonicalVolumeLink
                    }))
                    console.log(array)
                    this.setState({ books: array });
                    console.log(this.state.books)
                })


        }

    };




    render() {
        return (
            <div>
                <SearchForm
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                    search={this.state.search} />
                    <div>
                    {this.state.books.map((book, index) => (                
                    <Results
                        title={book.title}
                        authors={book.authors}
                        decription={book.description}
                        image={book.image}
                        link={book.link}

                    />))}
                    </div>
            </div>
        )
    }
}

export default Search;