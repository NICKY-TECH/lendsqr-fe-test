import "../../styles/base.css";
import {SideBarList} from "../../index";
import {
    secondBarItems,
    lastBarItems,
    thirdBarItems,
    logout,
    topBarItems,
  } from "../../resources/dataFolder/data.js";
import bag from "../../resources/images/icons/briefcase 1.png";
import home from "../../resources/images/icons/home 1.png";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';


function MobileFooterBar (){
return <section className="mobile-side-bar">
<Tippy content="Switch Organization">
<a href="#"><img src={bag} className="bag"/></a>
</Tippy>
<Tippy content="Dashboard">
<a href="#"><img src={home} className="home"/></a>
</Tippy>
<Tippy content={<div>
  <ul className="mobile-tooltip">
    {
      secondBarItems.map((i)=>{
        return <li><a>{i.title} </a></li>
      })
    }
  </ul>
</div>}>
<a href="#">CUSTOMERS</a>
</Tippy>
<Tippy content={<div>
  <ul className="mobile-tooltip">
    {
      thirdBarItems.map((i)=>{
        return <li><a>{i.title} </a></li>
      })
    }
  </ul>
</div>}>
<a href="#">BUSINESSES</a>
</Tippy>
<Tippy content={<div>
  <ul className="mobile-tooltip">
    {
      lastBarItems.map((i)=>{
        return <li><a>{i.title} </a></li>
      })
    }
  </ul>
</div>}>
<a href="#">SETTINGS</a>
</Tippy>
</section>
}

export default MobileFooterBar