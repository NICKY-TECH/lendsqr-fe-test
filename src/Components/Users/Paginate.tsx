import "../../styles/base.css";
import prev from "../../resources/images/icons/prev-btn.png";
import next from "../../resources/images/icons/next-btn.png";
import { useState,useEffect } from "react";

type func = (page: number) => void;

function Paginate(props: {
  usersPerPage: number;
  totalUsers: number;
  currentPage: number;
  updatePage: func;
}) {
  const pages = [];
  const [minLimit, setMinLimit] = useState(0);
  const [maxLimit, setMaxLimit] = useState(5);
  const limit = 5;
  for (let i = 1; i <= Math.ceil(props.totalUsers / props.usersPerPage); i++) {
    pages.push(i);
  }

function nextBtn() {
    const nextPage = props.currentPage<=pages.length-1?props.currentPage + 1 : props.currentPage;
    props.updatePage(nextPage);
    if (props.currentPage<=pages.length-1 && props.currentPage + 1 > maxLimit) {
        console.log("length")
        console.log(currentPage)
      setMaxLimit(maxLimit + limit);
      setMinLimit(minLimit+limit);
    }
  }

  function prevBtn (){
    const nextPage = props.currentPage===1?1:props.currentPage - 1;
    props.updatePage(nextPage);
    if (props.currentPage!=1 && (props.currentPage - 1 )%limit===0) {
      setMaxLimit(maxLimit - limit);
      setMinLimit(minLimit-limit);
    }
  }
  function currentPage(e: React.MouseEvent<HTMLLIElement, MouseEvent>) {
    props.updatePage(Number(e.currentTarget.id));
  }

  return (
    <div className="pagination-container">
      <div className="prev-btn-container">
        <img src={prev}  onClick={prevBtn}/>
      </div>
      <ul className="paginate">
        {pages.map((i, index) => {
          if (i < maxLimit + 1 && i > minLimit) {
            return (
              <li
                key={index}
                id={i.toString()}
                onClick={(e) => {
                  currentPage(e);
                }}
                className={
                  props.currentPage === i ? "active-number" : "not-active"
                }
              >
                {i}
              </li>
            );
          } else {
            return null;
          }
        })}
      </ul>

      <div className="next-btn-container">
        <img src={next} onClick={nextBtn} />
      </div>
    </div>
  );
}

export default Paginate;
