import "../../styles/base.css";
import {Search,SecondHalf} from "../../index";
import { useAppDispatch } from "../../hooks/typedRedux";
import { mobileState } from "../../features/MobileMenu";
function MobileMenu (){
    const dispatch = useAppDispatch();
    function closeMobileMenu(){
dispatch(mobileState(false))
    }
    return <div className="mobile-menu">
<div className="close-button-container">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 close-button">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" onClick={closeMobileMenu} />
</svg>
</div>
<div className="mobile-menu-content">
    <Search/>
  <div className="secondHalf-component-on-mobile-menu">
  <SecondHalf/>
  </div>
</div>

    </div>
}

export default MobileMenu
