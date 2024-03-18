import "../../styles/base.css";
import {
  Card,
  SideBar,
  Paginate,
  Selection,
  Input,
  Button,
  InputWrapper,
  FilterIcon,
} from "../../index";
import {
  cards,
  tableData,
  relationshipStatus,
  organizationSelection,
} from "../../resources/dataFolder/data";
import dot from "../../resources/images/icons/such-as.png";
import view from "../../resources/images/icons/view-hover.png";
import dropDown from "../../resources/images/icons/drop-down.png";
import blackList from "../../resources/images/icons/blacklist22.png";
import activate from "../../resources/images/icons/np_delete-friend_3248001_000000 1.png";
import { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks/typedRedux";
import { viewState } from "../../features/viewOverlay";
import { filter } from "../../resources/filter";

const MainBody: React.FC = () => {
  const filterBoard = useAppSelector((state) => state.filter.value);
  const viewOptions = useAppSelector((state) => state.view.value);
  const dispatch = useAppDispatch();
  const [users, setUsers] = useState<
    {
      organization: string,
      datejoined: string,
      email: string,
      icon: string,
      name: string,
      phonenumber:string
      index:string
    }[]
  >([]);
  const [clickedViewButton, setClickedButton] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const usersPerPage = 9;

  const lastUserIndex = pageNumber * usersPerPage;
  const firstUserIndex = lastUserIndex - usersPerPage;
  const currentUsersArr = users.slice(firstUserIndex, lastUserIndex);
  useEffect(() => {
    fetch("https://run.mocky.io/v3/a3fc7f2d-19e4-4f74-8df7-1f6e017646e5").then(
      (userArray) => {
        return userArray.json().then((readable) => {
          const userModifiedArr:
          {
           organization: string,
            datejoined: string,
            email: string,
            icon: string,
            name: string,
            phonenumber:string,
            index:string
          }[]
        =[];
          readable.map((i:object,index:number)=>{
           const updateI:{
            organization: string,
             datejoined: string,
             email: string,
             icon: string,
             name: string,
             phonenumber:string,
             index:string
           } ={...i,index:index.toString()}
            userModifiedArr.push(updateI)     
          })

if(localStorage.getItem("users")===undefined||localStorage.getItem("users")==null){
  localStorage.setItem("users",JSON.stringify(userModifiedArr));
}
  const usersArr =localStorage.getItem(("users"));
  const usersParsedArr =JSON.parse(usersArr)
  setUsers(() => [...usersParsedArr]);
        });
      }
    );
  },[]);
  
  
  function activateUser(index:number){
    users[index]={...users[index],icon:"Active"};
    localStorage.setItem("users",JSON.stringify(users));
    console.log("index")
    console.log(index);
    console.log(users[index])
   
  }

  function blackListUser(index:number){
    users[index]={...users[index],icon:"Blacklisted"}
    localStorage.setItem("users",JSON.stringify(users));
    console.log("index")
    console.log(index);
    console.log(users[index])
   
  }

  function viewList(e: React.MouseEvent<HTMLImageElement, MouseEvent>) {
    if (clickedViewButton !== e.currentTarget.id) {
      setClickedButton(e.currentTarget.id);
      dispatch(viewState(true));
    } else {
      setClickedButton("");
      dispatch(viewState(false));
    }
  }

  function updatePageNumber(page: number) {
    console.log(page);
    setPageNumber(page);
  }

  return (
    <section className="body">
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
                  ORGANIZATION <FilterIcon />
                </th>
                <th>
                  USERNAME <FilterIcon />
                </th>
                <th className="td-email">
                  EMAIL <FilterIcon />
                </th>
                <th>
                  PHONE NUMBER <FilterIcon />
                </th>
                <th>
                  DATE JOINED <FilterIcon />
                </th>
                <th>
                  STATUS <FilterIcon />
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {currentUsersArr.map((i, index) => {
              //   const updatedI = {...i, index:index }
              // localStorage.setItem(`${index}`,JSON.stringify(updatedI));
                return (
                  <tr key={index} className="view" id={index.toString()}>
                    <td>{i.organization}</td>
                    <td>{i.email}</td>
                    <td>{i.name}</td>
                    <td>{i.phonenumber}</td>
                    <td>{i.datejoined}</td>
                    <td>
                     <span className={i.icon==="Blacklisted"?"black-list-status":i.icon==="Active"?"active-status":i.icon==="Inactive"?"inactive-status":i.icon==="Pending"?"pending-status":""}>
                     {i.icon}
                     </span>
                    </td>
                    <td>
                      <img
                        src={dot}
                        id={index.toString()}
                        onClick={(e) => {
                          viewList(e);
                        }}
                        className="view-icon"
                      />
                    </td>
                    {viewOptions && index.toString() === clickedViewButton ? (
                      <div className="view-options">
                        <div className="view-item">
                          {" "}
                          <img src={view} />
                          <a href="#">View Details</a>
                        </div>
                        <div className="view-item" onClick={()=>{
                        const position = index;
                        blackListUser(position)
                        }}>
                          <img src={activate} />
                          <p>Blacklist User</p>
                        </div>
                        <div className="view-item"  onClick={()=>{
                        const position = index;
                       activateUser(position)
                        }}>
                          <img src={blackList} />
                          <p>Activate User</p>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </tr>
                );
              })}
            </tbody>
            {filterBoard ? (
              <div className="filter-board">
                <form>
                  <Selection {...{ data: organizationSelection }} />
                  <InputWrapper
                    label="Username"
                    input={Input}
                    inputProps={{
                      placeholder: "Username",
                      type: "text",
                      class: "reset-form",
                    }}
                  />
                  <InputWrapper
                    label="Email"
                    input={Input}
                    inputProps={{
                      placeholder: "Email",
                      type: "email",
                      class: "reset-form",
                    }}
                  />
                  <InputWrapper
                    label="Date"
                    input={Input}
                    inputProps={{
                      placeholder: "Date",
                      type: "date",
                      class: "reset-form",
                    }}
                  />
                  <InputWrapper
                    label="Phone Number"
                    input={Input}
                    inputProps={{
                      placeholder: "Phone Number",
                      type: "tel",
                      class: "reset-form",
                    }}
                  />
                  <Selection {...{ data: relationshipStatus }} />

                  <div className="reset-form-buttons">
                    <Button {...{ class: "reset", text: "Reset" }} updateData={setUsers} data={users}/>
                    <Button {...{ class: "filter", text: "Filter" }} />
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
              <p>{pageNumber*usersPerPage}</p>
              <img src={dropDown} />
            </div>
            <p>out of {users.length}</p>
          </div>
          <Paginate
            {...{
              usersPerPage: usersPerPage,
              totalUsers: users.length,
              currentPage: pageNumber,
              updatePage: updatePageNumber,
            }}
          />
        </footer>
      </article>
    </section>
  );
};

export default MainBody;
