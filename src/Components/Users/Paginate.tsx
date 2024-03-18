import "../../styles/base.css";
// import { useState } from "react";


type func = (page:number) => void

function Paginate(props:{usersPerPage:number,totalUsers:number,updatePage:func}) {
    const pages = [];
    // const [min,setMin] =useState(0);
    // const [max,setMax] =useState(5);
    // const limit =5 
    for(let i=1;i<=Math.ceil(props.totalUsers/props.usersPerPage);i++){
pages.push(i)
    }

  return <div className="pagination-container">
  <p>next</p>
<ul className="paginate">
{
    pages.map((i,index)=>{
        return <li key={index}>
            {i}

        </li>
    })
}
</ul>

  <p>prev</p>
    
  </div>;
}


export default Paginate;
