import { useParams } from "react-router-dom";
import "../styles/base.css";

function Details (){
    const id = useParams()
    console.log(id.id)
    return <section>

    </section>

}

export default Details;