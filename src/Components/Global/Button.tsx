import "../../styles/base.css";
import { filter } from "../../resources/filter";

type func = (page: {
    organization: string,
    datejoined: string,
    email: string,
    icon: string,
    name: string,
    phonenumber:string
    index:string
  }[] ) => void;
function Button (props:{class:string,text:string,data?: {
    organization: string,
    datejoined: string,
    email: string,
    icon: string,
    name: string,
    phonenumber:string
    index:string
  }[],updateData?:func}){

   const filterOptions = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.preventDefault()
    }
    function doNothing(){
    return null
    }
    return <button className={props.class} onClick={props.text==="Filter"?(e)=>{
        filterOptions(e)
    }:doNothing}>
    {props.text}
    </button>
}
export default Button