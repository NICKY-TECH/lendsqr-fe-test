import "../styles/base.css";
import { useAppSelector } from "../hooks/typedRedux";

import { SideBar,Header,MobileFooterBar,MobileMenu } from "..";
import { Outlet } from "react-router-dom";

function Main(){
    const mobileMenuReduxValue = useAppSelector((state) => state.mobileMenu.value);
    console.log("mobile")
    console.log(mobileMenuReduxValue)
    return <>
    <article className="dashboard">
   {mobileMenuReduxValue? <MobileMenu/>:""}
<Header/>
<section className="main-body">
<SideBar />
<Outlet/>
</section>
<MobileFooterBar/>
    </article></>
}
export default Main