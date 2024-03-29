import { RegistrationForm } from "..";
import LoginImage from "../resources/images/pablo-sign-in 1.svg"
import logo from "../resources/images/icons/Group (1).svg"

function Login(){
    return <section className="login-container">
        <header>
          <img src={logo} alt="logo"/>
        </header>
    <section className="login-section-two">
    <section className="login-image">
<img src={LoginImage} alt="login-hero-image"/>
        </section>
        <RegistrationForm/>
    </section>

    </section>
}

export default Login