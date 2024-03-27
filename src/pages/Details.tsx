import { useParams } from "react-router-dom";
import "../styles/base.css";
import backButton from "../resources/images/icons/back.png";
import fullStar from "../resources/images/icons/filled-star.png";
import unFilled from "../resources/images/icons/unfilled-star.png";
import user from "../resources/images/icons/global-avatar (1).png";
import { Button, SubLinks, DetailsSectionTwoWrapper, DetailsGroupSectionTwo } from "..";

function Details() {
  const id = useParams().id;
  const users = localStorage.getItem("users");
  const usableUsers = JSON.parse(users);
  const foundUser = usableUsers.find((i) => {
    return id == i.index;
  });
  const name = foundUser.name.split("@")[0];
  const personalEmail = `${name}@gmail.com`;
  const secondName = foundUser.email.split(" ")[1].toLowerCase();
  const gender = foundUser.email.includes("Grace")
    ? "Female"
    : foundUser.email.includes("Tosin")
    ? "Male"
    : foundUser.email.includes("Debby")
    ? "Female"
    : "";
  console.log(foundUser);
  return (
    <>
      <article className="details-page">
        <button className="back-button">
          <img src={backButton} />
          Back to Users
        </button>
        <div className="section-two-for-details-page">
          <p className="user-details-title">User Details</p>
          <div className="button-container-activate-users">
            <Button
              {...{ class: "black-list-user-detail", text: "BLACKLIST USER" }}
            />
            <Button
              {...{ class: "activate-user-detail", text: "ACTIVATE USER" }}
            />
          </div>
        </div>
        <section className="section-four-details-page">
          <div className="part-one-content-section-four">
            <div className="portion-one-part-one-content-section-four">
              <div className="user-base-details">
                <img src={user} />
                <div>
                  <p className="user-name">{foundUser.email}</p>
                  <p className="user-token">LSQFf587g90</p>
                </div>
              </div>
              <div className="user-rating">
                <p className="user-tier">User's tier</p>
                <div className="star-container">
                  <img src={fullStar} />
                  <img src={unFilled} />
                  <img src={unFilled} />
                </div>
              </div>
              <div className="bank-details">
                <p className="bank-details">₦200,000.00</p>
                <p className="account-details">9912345678/Providus Bank</p>
              </div>
            </div>
            <SubLinks />
          </div>
          <div className="part-two-content-section-four">
           <table>
            <DetailsGroupSectionTwo {...{
                title: "Personal Information",
                dataOne: [
                  { title: "FULL NAME", text: foundUser.email },
                  { title: "PHONE NUMBER", text: foundUser.phonenumber },
                  { title: "EMAIL ADDRESS", text: personalEmail },
                  { title: "BVN", text: foundUser.phonenumber },
                  { title: "GENDER", text: gender },
                ],
                dataTwo: [
                  { title: "MARITAL STATUS", text: "Single" },
                  { title: "CHILDREN", text: "10" },
                  { title: "TYPE OF RESIDENCE", text: "Parent's Apartment" },
                ],
              }}/>
              <DetailsGroupSectionTwo  {...{
                title: "Education and Employment",
                dataOne: [
                  { title: "LEVEL OF EDUCATION", text: "B.Sc" },
                  { title: "EMPLOYMENT STATUS", text: "Employed" },
                  { title: "SECTOR OF EMPLOYMENT", text: "FinTech" },
                  { title: "DURATION OF EMPLOYMENT", text: "2 years" },
                ],
                dataTwo: [
                  { title: "OFFICE EMAIL", text: foundUser.name },
                  { title: "MONTHLY INCOME", text: "₦200,000.00- ₦400,000.00" },
                  { title: "LOAN", text: "40,000" },
                ],
              }}/>
                      <DetailsGroupSectionTwo  {...{
                title: "Socials",
                dataOne: [
                  { title: "TWITTER", text: `@${name}_${secondName}` },
                  { title: "FACEBOOK", text: foundUser.email },
                  { title: "INSTAGRAM", text: `@${name}_${secondName}` },
                ],
              }}/>
                  <DetailsGroupSectionTwo  {...{
                title: "Guarantor",
                dataOne: [
                  { title: "FULL NAME", text: "Debby Ogana" },
                  { title: "PHONE NUMBER", text: foundUser.phonenumber },
                  { title: "EMAIL ADDRESS", text: "debby@gmail.com" },
                  { title: "RELATIONSHIP", text: "Sister" },
                ],
              }}/>
              <DetailsGroupSectionTwo  {...{
                title: "",
                dataOne: [
                  { title: "FULL NAME", text: "Debby Ogana" },
                  { title: "PHONE NUMBER", text: foundUser.phonenumber },
                  { title: "EMAIL ADDRESS", text: "debby@gmail.com" },
                  { title: "RELATIONSHIP", text: "Sister" },
                ],
              }}/>
           </table>

          </div>
        </section>
      </article>
    </>
  );
}

export default Details;
