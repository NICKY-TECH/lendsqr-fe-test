import "../../styles/base.css";

function Input(props: { placeholder: string,class?:string, type:string }) {
  return <div className={props.class}>
    <input placeholder={props.placeholder} type={props.type}/>
    {props.placeholder === "Password" ? <span className="show">SHOW</span> : ""}
  </div>;
}
export default Input;

