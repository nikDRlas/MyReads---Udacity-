import "./Book.css"
const Book = ({books, title, changeShelf}) => {

  return (
    <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map((book) => {
                      const image = book.imageLinks && book.imageLinks.thumbnail
                      return (
                            <li key={book.id}>
                            <div className="book">
                                <div className="book-top">
                                  <div className="book-cover">
                                    <img src={image} alt="cover" />
                                  </div>
                                   <div className="book-shelf-changer">
                                        <select value={book.shelf ? (book.shelf) : ("none")} onChange={(e) => changeShelf(book, e.target.value)}>
                                            <option value="moveTo" disabled>
                                                Move to...
                                            </option>
                                            <option value="currentlyReading">
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
                        </li>
                        );
                    })}

                </ol>
            </div>
        </div>
    

  )



//     return ( 
//       <div className="bookshelf">
//         <h2 className="bookshelf-title">{title}</h2>
//           <div className="bookshelf-books">
//             <ol className="books-grid"></ol>
//               {books.map(book => {
//         const image = book.imageLinks && book.imageLinks.thumbnail
//         return(
     
//         <li>
//              <div className="book">
//                         <div className="book-top">
//                           <div
//                             className="book-cover">
//                             <img src={image} alt="cover" />
//                           </div>
//                          <div className="book-shelf-changer">
                            
//                             <select onChange={(e) => changeShelf(book, e.target.value)}value={book.shelf}>
//                               <option value="none" disabled>
//                                 Move to...
//                               </option>
//                               <option value="book">
//                                 Currently Reading
//                               </option>
//                               <option value="wantToRead">Want to Read</option>
//                               <option value="read">Read</option>
//                               <option value="none">None</option>
//                             </select>
//                           </div>
//                         </div>
//                         <div className="book-title">{book.title}</div>
//                         <div className="book-authors">{book.authors}</div>
//                       </div>
//                     </li> )})
//                      </ol> 
//                 </div>
//               </div>
                    
//         );
     
// }
}
export default Book;