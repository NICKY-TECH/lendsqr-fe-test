import "../../styles/base.css";

function Button (props:{class:string,text:string}){
    return <button className={props.class}>
    {props.text}
    </button>
}
export default Button