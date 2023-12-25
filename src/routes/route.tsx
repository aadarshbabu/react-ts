import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { About } from "../page/about";
import { Contact } from "../page/contact";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);
