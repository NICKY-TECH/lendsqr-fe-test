import "@testing-library/jest-dom/vitest";
import {render,screen,fireEvent} from "@testing-library/react";
import { RegistrationForm } from "../index";

describe("RegistrationForm Functions properly",()=>{
    it("check if form is being displayed",()=>{
    render(<RegistrationForm/>);
    const form =screen.getByTestId("form");
     expect(form).toBeInTheDocument();
    });
    it("check if the SHOW text for the password input field is being displayed",()=>{
        render(<RegistrationForm/>);
        const show = screen.getByText("SHOW");
        expect(show).toBeInTheDocument()
    })
    it("check if input type changes from password to text after clicking on the SHOW text",()=>{
        render(<RegistrationForm/>); 
        const passwordInput = screen.getByTestId("password-field")
        const show = screen.getByText("SHOW");
        fireEvent.click(show);
        expect(passwordInput).toHaveAttribute("type","text");
        fireEvent.click(show);
        expect(passwordInput).toHaveAttribute("type","password");

    })
    it("check if button exists",()=>{
        render(<RegistrationForm/>); 
        expect(screen.getByText("LOG IN")).toBeInTheDocument();
    })
    it("check if forgot password link exists",()=>{
        render(<RegistrationForm/>); 
        expect(screen.getByText("FORGOT PASSWORD")).toBeInTheDocument();
    })
});

