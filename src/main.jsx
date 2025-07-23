import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Beranda from "./pages/beranda/Beranda";
import Kontak from "./pages/kontak/Kontak";
import ErrorCustom from "./pages/errorcustom/ErrorCustom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Beranda />,
  },
  {
    path:'/fraud',
    element : <div>Fraud</div>,

  },
  {
    path:'/kontak',
    element : <Kontak />,

  },
  {
    path:'/errorcustom',
    element : <ErrorCustom />,

  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);