import "../../styles/base.css";
function DetailsGroupSectionTwo(props: { title:string,dataOne:{}[],dataTwo?:{}[] }) {
  return (
    <div className="container-row">
      <tr className="details-row row-title">
        <td>{props.title}</td>
      </tr>
   <tr className="details-row">
    {
     props.dataOne.map((i)=>{
      return <td>
        <span className="title">
{i.title}
        </span>
        <span className="body">
{i.text}
        </span>
      </td>
     }) 
    }
   </tr>
{
  props.dataTwo?   <tr className="details-row">
    {
       props.dataTwo.map((i)=>{
        return <td>
          <span className="title">
  {i.title}
          </span>
          <span className="body">
  {i.text}
          </span>
        </td>
       }) 
    }
  </tr>:""
}
    </div>
  );
}
export default DetailsGroupSectionTwo;
