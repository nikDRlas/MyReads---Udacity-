import "./App.css";
import { useState, useEffect } from "react";
import Bookshelf from "./components/layout/Bookshelf/bookshelf";
import { getAll } from "./BooksAPI";
import Footer from "./components/Footer/footer";
import { update } from "./BooksAPI";
import SearchPage from "./components/Search/search";
import Navbar from "./components/layout/Navbar/navhbar";
import { Route, Routes } from "react-router-dom";

function App() {
  const [books, setBooks] = useState([]);
  const [shelf, setShelf] = useState("none");

  const changeShelf = (book, selectedShelf) => {
    setShelf((book.shelf = selectedShelf));

    update(book, selectedShelf);
    const addedBook = books.filter((filterBook) => filterBook.id === book.id);
    setBooks([...books, addedBook]);
  };

  useEffect(() => {
    const getData = async function () {
      const response = await getAll();

      setBooks(response);
    };

    getData();
  }, [books]);

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Bookshelf books={books} changeShelf={changeShelf} shelf={shelf} />
          }
        ></Route>
        <Route
          exact
          path="/search"
          element={
            <SearchPage changeShelf={changeShelf} books={books} shelf={shelf} />
          }
        ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
