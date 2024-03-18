import "../../styles/base.css";

function SideBarList(props: {data:{icon?: string; title?: string,sideIcon?:string }[],isMobile?:string}) {
  return (
    <ul className="side-bar-list">
        {
            props.data.map((i)=>{
return <li>
        
<a href="#">
<img src={i.icon} />
<p>{props.isMobile?"":i.title}</p>
{
   props.isMobile? "":<img src={i.sideIcon}/>
}
</a>
</li>
            })
        }
    
    </ul>

  );
}

export default SideBarList;
