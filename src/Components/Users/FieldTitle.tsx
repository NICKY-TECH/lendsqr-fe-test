import "../../styles/base.css";

function FieldTitle(props: { title: string }) {
  return <h3 className="field-title">{props.title}</h3>;
}

export default FieldTitle;
