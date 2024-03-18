import "../../styles/base.css";
import {
  secondBarItems,
  lastBarItems,
  thirdBarItems,
  logout,
  topBarItems,
} from "../../resources/dataFolder/data.js";
import { SideBarList } from "../../index";

function SideBar() {
  return (
    <aside>
      <div className="first-child">
        <SideBarList {...{ data: topBarItems }} />
      </div>
      <div>
        <p  className="sidebar-title">CUSTOMERS</p>
        <SideBarList {...{ data: secondBarItems }} />
      </div>
      <div>
        <p className="sidebar-title">BUSINESSES</p>
        <SideBarList {...{ data: thirdBarItems }} />
      </div>
      <div>
        <p className="sidebar-title">SETTINGS</p>
        <SideBarList {...{ data: lastBarItems }} />
      </div>
      <div className="logout">
        <SideBarList {...{ data: logout }} />
      </div>
    </aside>
  );
}

export default SideBar;
