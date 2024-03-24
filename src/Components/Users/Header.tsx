import "../../styles/base.css";
import logo from "../../resources/images/icons/Group (1).svg";
import {Search,SecondHalf} from "../../index";
import { useAppDispatch } from "../../hooks/typedRedux";
import { mobileState } from "../../features/MobileMenu"

function Header() {
  const dispatch = useAppDispatch();
  function showMobileMenu(){
dispatch(mobileState(true))
  }
  return (
    <header className="header" role="header">
      <div role="group-logo-and-input" className="logo-group">
        <img src={logo}  className="logo"/>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 ham" onClick={showMobileMenu} data-testid="hamburger-menu">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" data-testid="hamburger-icon"/>
</svg>


    <Search/>
      </div>
      <div role="group-left-items" className="header-section-two">
        <SecondHalf/>
      </div>
    </header>
  );
}

export default Header;
