import "../styles/base.css";
import { MainBody,Header,MobileFooterBar } from "..";

function Dashboard(){
    return <article className="dashboard">
<Header/>
<MainBody/>
<MobileFooterBar/>
    </article>
}

export default Dashboard