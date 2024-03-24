import { Input,Button } from "../../index";
import "../../styles/base.css";

function RegistrationForm() {
  return <section className="login-form">
   <div className="login-inner-content">
   <h1>Welcome!</h1>
    <h2>Enter details to login.</h2>
    <form data-testid="form">
      <Input {...{ placeholder: "Email" ,type:"email"}} />
      <Input {...{ placeholder: "Password",type:"password" }} />
      <a href="#">FORGOT PASSWORD</a>
      <Button {...{class:"reg-button",text:"LOG IN"}}/>
    </form>
   </div>
  </section>;
}

export default RegistrationForm;
