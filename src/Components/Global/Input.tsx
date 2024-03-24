import "../../styles/base.css";
import { useState } from "react";

function Input(props: { placeholder: string,class?:string, type:string }) {
  const [fixedType,setFixedType] =useState("password")
  function show(){
  if(fixedType==="password"){
    setFixedType("text")
  }else{
    setFixedType("password")
  }
  }
  return <div className={props.class}>
    <input placeholder={props.placeholder} type={props.type==="password"?fixedType:props.type} data-testid={props.type==="password"?"password-field":""}/>
    {props.placeholder === "Password" ? <span className="show" onClick={show}>SHOW</span> : ""}
  </div>;
}
export default Input;
