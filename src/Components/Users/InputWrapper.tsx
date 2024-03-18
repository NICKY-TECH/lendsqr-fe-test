import "../../styles/base.css";
import React, { ComponentType } from 'react';
interface ComponentProps {
  label: string;
  input: ComponentType<any>;
  inputProps: Record<string, any>
}
const InputWrapper:React.FC<ComponentProps>=({label,input:InputComponent,inputProps})=>{
return<div className="input-wrapper">
<p>
{label}
</p>
<InputComponent {...inputProps}/>
</div>
}

export default InputWrapper