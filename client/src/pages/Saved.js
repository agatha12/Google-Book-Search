import SavedDisplay from "../components/SavedDisplay/SavedDisplay";
import API from "../utils/API";
import React, { Component } from "react"
class Saved extends Component {
    state = {
        books: [
            {
                _id: "",
                title: "",
                authors: "",
                description: "",
                image: "",
                link: ""
            }
        ]
    }

    componentDidMount() {
        this.loadBooks();
      }
    
      loadBooks = () => {
        API.getBooks()
          .then(res =>
            this.setState({ books: res.data, title: "", author: "", synopsis: "" })
          )
          .catch(err => console.log(err));
      };
    deleteBook = id => {
        API.deleteBook(id)
          .then(res => this.loadBooks())
          .catch(err => console.log(err));
      };

    render() {
        return (
            <div>
                <div>
                    {this.state.books.map((book, index) => (
                        <SavedDisplay
                            key={index}
                            title={book.title}
                            authors={book.authors}
                            decription={book.description}
                            image={book.image}
                            link={book.link}
                            deleteBook={() => this.deleteBook(book._id)}

                        />))}
                </div>
            </div>
        )
    }
}

export default Saved;