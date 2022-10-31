import "./bookshelf.css"
import Book from "../../Books/Book";
const Bookshelf = ({ books, changeShelf}) => {

      
    return (  
        <div className="list-books-content">
            <div>
                    <Book books={books.filter(book => book.shelf === 'currentlyReading')} title='Currently Reading' changeShelf={changeShelf}/>
                    <Book books={books.filter(book => book.shelf === 'wantToRead')} title='Want to Read' changeShelf={changeShelf} />
                    <Book books={books.filter(book => book.shelf === 'read')} title='Finished Reading'changeShelf={changeShelf} />
                 
            </div>
          </div>
    );
}
 
export default Bookshelf;