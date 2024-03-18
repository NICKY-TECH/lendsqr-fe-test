import "../styles/base.css";
import { useAppSelector } from "../hooks/typedRedux";

import { MainBody,Header,MobileFooterBar,MobileMenu } from "..";

function Dashboard(){
    const mobileMenuReduxValue = useAppSelector((state) => state.mobileMenu.value);
    console.log("mobile")
    console.log(mobileMenuReduxValue)
    return <>
    <article>
   {mobileMenuReduxValue? <MobileMenu/>:""}
<MainBody/>
<MobileFooterBar/>
    </article></>
}
export default Dashboard