import "../../styles/base.css";
function DetailsGroupSectionTwo(props: { title: string; text: string }) {
  return (
    <div className="details-group-section">
      <p>{props.title}</p>
   
   <p>{props.text}</p>
    </div>
  );
}
export default DetailsGroupSectionTwo;
