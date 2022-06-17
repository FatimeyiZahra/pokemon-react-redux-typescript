import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./redux/store/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});
export default store;
export type RootStore = ReturnType<typeof store.getState>
export type AppDispatch= typeof store.dispatch
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
