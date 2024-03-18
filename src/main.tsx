import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/base.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import filter from "./features/preferenceOverlay.ts";
import view from "./features/viewOverlay.ts";
import mobileMenu from "./features/MobileMenu.ts";

const store = configureStore({
  reducer: {
    filter,
    view,
    mobileMenu,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
