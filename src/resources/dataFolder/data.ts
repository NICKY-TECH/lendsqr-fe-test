import users from "../images/icons/users-body.png";
import active from "../images/icons/active-users-1.png";
import loans from "../images/icons/users-with-loans.png";
import savings from "../images/icons/users-with-savings.png";
import bag from "../images/icons/briefcase 1.png";
import home from "../images/icons/home 1.png";
import dropdown from "../images/icons/drop-down.png";
import usersSide from "../images/icons/users.png";
import Guarantor from "../images/icons/Guarantors.png";
import loansSide from "../images/icons/Loans.png";
import decisionMaking from "../images/icons/Decision-Model.png";
import savingsSide from "../images/icons/savings.png";
import loanRequest from "../images/icons/Loan-request.png";
import whiteList from "../images/icons/white-list.png";
import karma from "../images/icons/karma.png";
import loanProduct from "../images/icons/loans-product.png";
import transaction from "../images/icons/transaction.png";
import savingProduct from "../images/icons/saving-products.png";
import feesChange from "../images/icons/fees-and-charges.png";
import settlement from "../images/icons/settlement.png";
import report from "../images/icons/reports.png";
import services from "../images/icons/services.png";
import serviceAccount from "../images/icons/service-account.png";
import preferences from "../images/icons/Preferences.png";
import feesAndPricing from "../images/icons/fee-and-pricing.png";
import systems from "../images/icons/system.png";
import audit from "../images/icons/audit.png";
import logoutSide from "../images/icons/sign-out 1.png";
import activePill from "../images/icons/active pill.png";
import inactive from "../images/icons/inactive pill.png";
import pending from "../images/icons/pending pill.png";
import blacklisted from "../images/icons/blacklisted pill.png";

const cards = [
  {
    icon: users,
    title: "USERS",
    total: "2,453",
  },
  {
    icon: active,
    title: "ACTIVE USERS",
    total: "2,453",
  },
  {
    icon: loans,
    title: "USERS WITH LOANS",
    total: "12,453",
  },
  {
    icon: savings,
    title: "USERS WITH SAVINGS",
    total: "102,453",
  },
];

const topBarItems = [
  {
    icon: bag,
    title: "Switch Organization",
    sideIcon: dropdown,
  },
  {
    icon: home,
    title: "Dashboard",
  },
];

const secondBarItems = [
  {
    icon: usersSide,
    title: "Users",
  },
  {
    icon: Guarantor,
    title: "Guarantors",
  },
  {
    icon: loansSide,
    title: "Loans",
  },
  {
    icon: decisionMaking,
    title: "Decision Models",
  },
  {
    icon: savingsSide,
    title: "Savings",
  },
  {
    icon: loanRequest,
    title: "Loan Request",
  },
  {
    icon: whiteList,
    title: "Whitelist",
  },
  {
    icon: karma,
    title: "Karma",
  },
];

const thirdBarItems = [
  {
    icon: bag,
    title: "Organization",
  },
  {
    icon: loanProduct,
    title: "Loan Products",
  },
  {
    icon: savingProduct,
    title: "Saving Products",
  },
  {
    icon: feesChange,
    title: "Fees Charges",
  },
  {
    icon: transaction,
    title: "Transactions",
  },
  {
    icon: services,
    title: "Services",
  },
  {
    icon: serviceAccount,
    title: "Service Account",
  },
  {
    icon: settlement,
    title: "Settlements",
  },
  {
    icon: report,
    title: "Reports",
  },
];

const lastBarItems = [
  {
    icon: preferences,
    title: "Preferences",
  },
  {
    icon: feesAndPricing,
    title: "Fees and Pricing",
  },
  {
    icon: audit,
    title: "Audit",
  },
  {
    icon: systems,
    title: "System Messages",
  },
];

const logout = [
  {
    icon: logoutSide,
    title: "Logout",
  },
];

const tableData = [
  {
    organization: "Lendsqr",
    email: "Adedeji",
    name: "adedeji@lendsqr.com",
    phonenumber: "08078903721",
    datejoined: "May 15, 2020 10:00 AM",
    icon: inactive,
  },
  {
    organization: "Irorun",
    email: "Debby Ogana",
    name: "debby2@irorun.com",
    phonenumber: "08160780928",
    datejoined: "Apr 30, 2020 10:00 AM",
    icon: pending,
  },
  {
    organization: "Lendstar",
    email: "Grace Effiom",
    name: "grace@lendstar.com",
    phonenumber: "07060780922",
    datejoined: "Apr 30, 2020 10:00 AM",
    icon: blacklisted,
  },
  {
    organization: "Lendstar",
    email: "Tosin Dokunmu",
    name: "tosin@lendsqr.com",
    phonenumber: "07003309226",
    datejoined: "Apr 10, 2020 10:00 AM",
    icon: pending,
  },
  {
    organization: "Lendstar",
    email: "Grace Effiom",
    name: "grace@lendstar.com",
    phonenumber: "07060780922",
    datejoined: "Apr 30, 2020 10:00 AM",
    icon: activePill,
  },
  {
    organization: "Lendstar",
    email: "Tosin Dokunmu",
    name: "tosin@lendsqr.com",
    phonenumber: "08060780900",
    datejoined: "Apr 10, 2020 10:00 AM",
    icon: activePill,
  },
  {
    organization: "Lendstar",
    email: "Grace Effiom",
    name: "grace@lendstar.com",
    phonenumber: "07060780922",
    datejoined: "Apr 30, 2020 10:00 AM",
    icon: blacklisted,
  },
  {
    organization: "Lendstar",
    email: "Tosin Dokunmu",
    name: "tosin@lendsqr.com",
    phonenumber: "08060780900",
    datejoined: "Apr 10, 2020 10:00 AM",
    icon: inactive,
  },
  {
    organization: "Lendstar",
    email: "Grace Effiom",
    name: "grace@lendstar.com",
    phonenumber: "07060780922",
    datejoined: "Apr 30, 2020 10:00 AM",
    icon: inactive,
  },
];

const organizationSelection = [{
  organization:"Lendsqr",
  label:"organization-type"
},{
  organization: "Lendstar",
  label:"organization-type"

}, {
  organization:"Irorun",
  label:"organization-type"
}];

const relationshipStatus = [{
 status:"Single",
   label:"relationship-status"
}, {status:"Married",   label:"relationship-status"}
, {
  status:"Divorced",
  label:"relationship-status"

}, {
  status:"Dating",
  label:"relationship-status"

}];

const subLinks =[
  "General Details",
  "Documents",
  "Bank Details",
  "Loans",
  "Savings",
  "App and Systems"
]


const personalDataOne =[
  {
    title:"FULL NAME",
    text:""
  }
]

export {
  cards,
  secondBarItems,
  lastBarItems,
  thirdBarItems,
  subLinks,
  logout,
  tableData,
  topBarItems,
  organizationSelection,
  relationshipStatus
};
