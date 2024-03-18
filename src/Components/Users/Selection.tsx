

function Selection (props:{data:{status?:string,label:string,organization?:string}[]}){
 return   <div className="select-type-container">
    <p>{props.data[1].label==="organization-type"?"Organization":"Status"}</p>
    <select id="options" name={props.data[1].
    label}>
    <option value="Select" selected>
    Select
    </option>
  {
    props.data.map((i)=>{
return <option value={props.data[1].label==="organization-type"?i.organization:i.status}>
    {props.data[1].label==="organization-type"?i.organization:i.status}
</option>
    })
  }
</select>
 </div>
}

export default Selection 