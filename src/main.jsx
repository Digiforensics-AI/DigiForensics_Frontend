import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Beranda from "./pages/Beranda/Beranda";
const router = createBrowserRouter([
  {
    path: "/",

    element: <Beranda />,
  },
  {
    path:'/fraud',
    element : <div>Fraud</div>

  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);