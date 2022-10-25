import "./App.css";
import { useState, useEffect } from "react";
import Bookshelf from "./components/layout/Bookshelf/bookshelf";
import { getAll } from "./BooksAPI";
import Footer from "./components/Footer/footer";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [books, setBooks] = useState();
  const [currentRead, setCurrent] = useState([]);
  const [wantRead, setWant] = useState([]);
  const [finishedRead, setFinished] = useState([]);

  // const changeShelf = (book) => {
  //   book.shelf ===

  // }

  useEffect(() => {
    getData();
  }, []);

  const getData = async function () {
    const response = await getAll();
    setCategorie(response);
    setBooks(response);
  };

  const setCategorie = function (books) {
    console.log(books);
    books.forEach((book) => {
      if (book.shelf === "currentlyReading") {
        setCurrent((oldArray) => [...oldArray, book]);
        console.log(currentRead);
        return;
      }
      if (book.shelf === "read") {
        setFinished((oldArray) => [...oldArray, book]);
        return;
      }
      if (book.shelf === "wantToRead") {
        setWant((oldArray) => [...oldArray, book]);
        return;
      }
    });
  };

  return (
    <div className="app">
      {showSearchPage ? (
        <div className="search-books">
          <div className="search-books-bar">
            <a
              className="close-search"
              onClick={() => setShowSearchpage(!showSearchPage)}
            >
              Close
            </a>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>
      ) : (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <Bookshelf
            relatedBooks={currentRead}
            // changeShelf={changeShelf}
            title="Currently Reading"
          />
          <Bookshelf relatedBooks={wantRead} title="Want to read" />
          <Bookshelf relatedBooks={finishedRead} title="Finished Reading" />
          <div className="open-search">
            <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;
