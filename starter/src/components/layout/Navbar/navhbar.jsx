
import "./navbar.css"
import { Link } from "react-router-dom"
const Navbar = () => {

    return (  
        <div className="list-books">
          <div className="list-books-title">
            <h1>My Reading List</h1>
            <div className="nav">
                <Link className="link home-link"to="/">Home</Link>
                <Link to="/search" className="link search-link">Search</Link>
            </div>
             </div>
            
          
          </div>

    );
}
 
export default Navbar;