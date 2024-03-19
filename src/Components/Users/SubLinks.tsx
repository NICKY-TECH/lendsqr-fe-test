import { useState } from "react";
import "../../styles/base.css";
import { subLinks } from "../../resources/dataFolder/data";
function SubLinks() {
  const [active, setActive] = useState("General Details");
  function activeLink(e: React.MouseEvent<HTMLLIElement, MouseEvent>, i) {
    e.preventDefault();
    console.log(i);
    setActive(i);
  }
  return (
    <nav>
      <ul>
        {subLinks.map((i) => {
          return (
            <li>
              <a
                href={`/${i}`}
                className={active == i ? "is-active-link" : "in-active"}
                onClick={(e) => {
                  activeLink(e, i);
                }}
              >
                {i}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default SubLinks;
