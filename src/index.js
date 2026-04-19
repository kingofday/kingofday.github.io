import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "components";
import Home from "components/home";
import About from "components/about";
import Test from "components/test";
import Projects from "components/projects";
import { I18nextProvider } from "react-i18next";
import i18n from "config/i18n"
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
        index: true,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "test",
        element: <Test />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <RouterProvider router={router} />
    </I18nextProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
