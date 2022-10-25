import Book from "../../Books/Book";
const Bookshelf = ({title, relatedBooks, changeShelf}) => {
      
    return (  
        <div className="list-books-content">
            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    <Book relatedBooks={relatedBooks} changeShelf={changeShelf}/>
                  </ol> 
                </div>
              </div>
            </div>
          </div>
    );
}
 
export default Bookshelf;