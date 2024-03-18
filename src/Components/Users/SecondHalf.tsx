import "../../styles/base.css";
import search from "../../images/icons/search.png";
import bell from "../../resources/images/icons/bell.png";
import avatar from "../../resources/images/icons/avatar.png";
import dropDown from "../../resources/images/icons/header-dropdown.png"
function SecondHalf(){
    return <>
    <a href="#">Docs</a>
        <img src={bell} />
        <img src={avatar}/>
        <div className="adedeji">
            <p className="user-name">Adedeji</p>
           <div>
           <img src={dropDown}/>
           </div>
        </div></>
}

export default SecondHalf