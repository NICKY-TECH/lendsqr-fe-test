import "@testing-library/jest-dom/vitest";
import {render,screen,fireEvent} from "@testing-library/react";
import { Login } from "../index";

describe("Login Page",()=>{
    it("check if form is being displayed",()=>{
    render(<Login/>);
    const loginImage =screen.getByAltText("login-hero-image");
     expect(loginImage).toBeInTheDocument();
    });
    it("check if logo is being displayed",()=>{
        render(<Login/>);
        const logo =screen.getByAltText("logo");
         expect(logo).toBeInTheDocument();
        });
   
});

