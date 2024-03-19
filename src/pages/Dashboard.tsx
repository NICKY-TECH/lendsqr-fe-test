import "../styles/base.css";

import { MainBody,MobileFooterBar } from "..";

function Dashboard(){
    return <>
    <article className="dashboard-body">
<MainBody/>
<MobileFooterBar/>
    </article></>
}
export default Dashboard