import "../../styles/base.css";

function Card (props:{icon:string,title:string,total:string,index:number}){
return <div className="card">
 <div>
 <img src={props.icon}/>
 </div>
    <p className="title">{props.title}</p>
    <p className="add-margin">{props.total}</p>
</div>
}

export default Card