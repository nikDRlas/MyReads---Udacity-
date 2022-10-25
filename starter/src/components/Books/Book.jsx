import "./Book.css"
const Book = ({relatedBooks, changeShelf}) => {
  console.log(relatedBooks);

    return ( 
   
      relatedBooks.map(book => {
        const image = book.imageLinks && book.imageLinks.thumbnail
        return(
     
        <li>
             <div className="book">
                        <div className="book-top">
                          <div
                            className="book-cover">
                            <img src={image} alt="cover" />
                          </div>
                         <div className="book-shelf-changer">
                            
                            <select onChange={(e) => changeShelf(book)}value={book.shelf}>
                              <option value="none" disabled>
                                Move to...
                              </option>
                              <option value="book">
                                Currently Reading
                              </option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                              <option value="none">None</option>
                            </select>
                          </div>
                        </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.authors}</div>
                      </div>
                    </li> )})
     );
}
 
export default Book;