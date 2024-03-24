import "@testing-library/jest-dom/vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Header } from "../index";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { mobileState } from "../features/MobileMenu";

describe("Header Functions properly", () => {
  it("check if header is being displayed", () => {
    const initialValue = {
      state: {
        value: false,
      },
    };
    const mockStore = configureStore();
    const store = mockStore(initialValue);
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );
    const header = screen.getByRole("header");
    expect(header).toBeInTheDocument();
  });
  it("check if value changed to true", () => {
    const initialValue = {
      state: {
        value: false,
      },
    };
    const mockStore = configureStore();
    const store = mockStore(initialValue);
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );
    const hamburgerMenu = screen.getByTestId("hamburger-menu");
     fireEvent.click(hamburgerMenu);
    const action = store.getActions();
    expect(action.length).toBe(1);
    expect(action[0]).toEqual(mobileState(true));
  });
});
