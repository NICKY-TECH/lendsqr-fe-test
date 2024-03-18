import "../../styles/base.css";
import search from "../../resources/images/icons/search.png";


function Search(){
    return   <div className="search">
    <input placeholder="Search for anything" />
    <span className="search-bottom">
      <img src={search} className="search-icon" />
    </span>
  </div>
}

export default Search