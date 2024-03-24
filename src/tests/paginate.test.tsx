import "@testing-library/jest-dom/vitest";
import { render, screen, fireEvent,waitFor } from "@testing-library/react";
import { Paginate} from "../index";


describe("Header Functions properly", () => {
    const updatePage = vi.fn();
  it("check next button image is being displayed", () => {
    render(<Paginate {...{usersPerPage:3,totalUsers:18,currentPage:1,updatePage}}/>)

    expect(screen.getByAltText("next")).toBeInTheDocument()
  })

  it("check previous button image is being displayed", () => {
    render(<Paginate {...{usersPerPage:3,totalUsers:18,currentPage:1,updatePage}}/>)
    expect(screen.getByAltText("previous")).toBeInTheDocument()

  })
  it("check if pagination increment button is functioning",()=>{
    render(<Paginate {...{usersPerPage:3,totalUsers:18,currentPage:1,updatePage}}/>)
const next =screen.getByAltText("next");
fireEvent.click(next);
waitFor(()=>{
const current = screen.getByTestId("current").textContent;
expect(current).toBe("2");
})
  })
  it("check if pagination decrement button is functioning",()=>{
    render(<Paginate {...{usersPerPage:3,totalUsers:18,currentPage:1,updatePage}}/>)
const next =screen.getByAltText("previous");
fireEvent.click(next);
waitFor(()=>{
const current = screen.getByTestId("current").textContent;
expect(current).toBe("1");
})
  })
});
