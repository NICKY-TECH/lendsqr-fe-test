import "../../styles/base.css";
import { Card, SideBar, Paginate, Selection, Input,Button,InputWrapper,FilterIcon } from "../../index";
import {
  cards,
  tableData,
  relationshipStatus,
  organizationSelection,
} from "../../resources/dataFolder/data";
import dot from "../../resources/images/icons/such-as.png";
import prevBtn from "../../resources/images/icons/prev btn (1).png";
import view from "../../resources/images/icons/view-hover.png"
import dropDown from "../../resources/images/icons/drop-down.png";
import blackList from "../../resources/images/icons/blacklist22.png";
import activate from "../../resources/images/icons/np_delete-friend_3248001_000000 1.png"
import { useState, useEffect } from "react";
import { useAppSelector,useAppDispatch} from "../../hooks/typedRedux";
import { viewState } from "../../features/viewOverlay";

const MainBody:React.FC=()=> {
  const filterBoard = useAppSelector((state) => state.filter.value);
  const viewOptions = useAppSelector((state) => state.view.value);
  const dispatch = useAppDispatch()
  const [users, setUsers] = useState<object[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const usersPerPage = 9;

  const lastUserIndex = pageNumber * usersPerPage;
  const firstUserIndex = lastUserIndex - usersPerPage;
  const currentUsersArr = users.slice(firstUserIndex, lastUserIndex);
  useEffect(() => {
    fetch("https://run.mocky.io/v3/7e2ad6f0-16b8-4043-8901-1d06f7414932").then(
      (userArray) => {
        return userArray.json().then((readable) => {
          setUsers(() => [...readable]);
        });
      }
    );
  });

  function viewList(e:React.MouseEvent<HTMLImageElement, MouseEvent>){
    dispatch(viewState())
  console.log(e.currentTarget)
  }

  function updatePageNumber(page: number) {
    setPageNumber(page);
  }

  return (
    <section className="main-body">
      <SideBar />
      <article>
        <h1>Users</h1>
        <section className="cards-container">
          {cards.map(
            (
              i: { icon: string; title: string; total: string },
              index: number
            ) => {
              return (
                <Card
                  {...{
                    icon: i.icon,
                    title: i.title,
                    total: i.total,
                    index: index,
                  }}
                />
              );
            }
          )}
        </section>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>
                  ORGANIZATION <FilterIcon/>
                </th>
                <th>
                  USERNAME <FilterIcon/>
                </th>
                <th className="td-email">
                  EMAIL <FilterIcon/>
                </th>
                <th>
                  PHONE NUMBER <FilterIcon/>
                </th>
                <th>
                  DATE JOINED <FilterIcon/>
                </th>
                <th>
                  STATUS <FilterIcon/>
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((i, index) => {
                return (
                  <tr key={index} className="view" id={index.toString()}>
                    <td>{i.organization}</td>
                    <td>{i.email}</td>
                    <td>{i.name}</td>
                    <td>{i.phonenumber}</td>
                    <td>{i.datejoined}</td>
                    <td>
                      <img src={i.icon} />
                    </td>
                    <td>
                      <img src={dot} id={index.toString()} onClick={(e)=>{viewList(e)}} className="view-icon"/>
                    </td>
                 {
                  viewOptions?   <div className="view-options">
                  <div className="view-item">   <img src={view}/><a href="#">View Details</a></div>
                  <div className="view-item">
                       <img src={activate}/><p>Blacklist User</p>
                  </div>
                      <div className="view-item">
                       <img src={blackList}/><p>Activate User</p>
                  </div>
                   

                    </div>:""
                 }
                  </tr>
                );
              })}
            </tbody>
            {filterBoard ? (
              <div className="filter-board">
                <form>
                  <Selection {...{ data: organizationSelection }} />
                  <InputWrapper label="Username"
                  input={Input}
                  inputProps={{ placeholder: "Username", type: "text", class:"reset-form" }}
                  />
                   <InputWrapper label="Email"
                  input={Input}
                  inputProps={{ placeholder: "Email", type: "email", class:"reset-form" }}
                  />
                    <InputWrapper label="Date"
                  input={Input}
                  inputProps={{placeholder:"Date",type:"date", class:"reset-form" } }
                  />
                    <InputWrapper label="Phone Number"
                  input={Input}
                 inputProps={{ placeholder: "Phone Number", type: "tel", class:"reset-form" }}
                  />
        
                  <div className="reset-form-buttons">
                    <Button  {...{class:"reset",text:"Reset"}}/>
                    <Button  {...{class:"filter",text:"Filter"}}/>
                  </div>
                </form>
              </div>
            ) : (
              ""
            )}
          </table>
        </div>
        <footer>
          <div className="first-half-footer">
            <p>Showing</p>
            <div className="data-shown">
              <p>100</p>
              <img src={dropDown} />
            </div>
            <p>out of 100</p>
          </div>
          <Paginate
            {...{
              usersPerPage: usersPerPage,
              totalUsers: users.length,
              updatePage: updatePageNumber,
            }}
          />
        </footer>
      </article>
    </section>
  );
}

export default MainBody;
