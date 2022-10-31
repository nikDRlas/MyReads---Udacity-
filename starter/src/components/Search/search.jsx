
import {useEffect, useState} from "react"
import { search } from "../../BooksAPI";
import Book from "../Books/Book";
import "./search.css"
import { Link } from "react-router-dom"


const SearchPage = ({ changeShelf, shelf, books}) => {
    const [query, setQuery] = useState();
    const [searchedBooks, setSearchedBooks] = useState([])
    const [searchMessage, setSearchMessage] = useState(false)
    const matchingBooks = [];


    const getSearch = async(query) => {
    
        if(!query){
            setSearchedBooks(null);
            return;
        }
        const searchResults = await search(query);
        console.log(searchResults);
        if(searchResults.error){
            setSearchedBooks([])
            setSearchMessage(true)
            return;
        }
        setSearchedBooks(searchResults);
         setSearchMessage(false)
    }

    useEffect(()=> {
        getSearch(query);
    }, [query])

    // eslint-disable-next-line no-lone-blocks
    searchedBooks && searchedBooks.map(searchResult => {
        const matchingResults = books.filter(book => book.id === searchResult.id);

        if (matchingResults.length > 0)
        {

            return matchingBooks.push(...matchingResults);

        } 

        return matchingBooks.push(searchResult)

        
    });

    return ( 
        <>
        <div className="search-books">
          <div className="search-books-bar">
             <Link className="close-search" to="/">Home</Link>
            <div className="search-books-input-wrapper">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                placeholder="Search by title, author, or ISBN"
              />
            </div>
          </div> 
          <div className="search-books-results">
            <ol className="books-grid"></ol>
           { searchMessage && <div className="no-result-container"> <p className="no-result-message">No books found. Please search for another book! </p>
           <p> <Link className="no-result-message-link" to="/">Back to your bookshelf!</Link> </p></div>}
          
            {searchedBooks &&  <Book books={matchingBooks} changeShelf={changeShelf} shelf={shelf} select={"none"}/>}
          </div>
        </div>
        </>
     );
}
 
export default SearchPage;