import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { initSatellite } from "@junobuild/core";

// Polyfill untuk global
window.global = window;

import '../css/custom.css';
import './index.css';
import Beranda from "./pages/Beranda/Beranda";
import Kontak from "./pages/kontak/Kontak";
import Feature from "./pages/feature/Feature";
import Fraud from "./pages/fraud/Fraud";
import FAQ from "./pages/faq/FAQ";
import ResultFraud from "./pages/result_fraud/ResultFraud";
import AdminBeranda from "./pages/admin/Beranda/Beranda";

const initializeApp = async () => {
  await initSatellite({
    satelliteId: "7suu2-zyaaa-aaaal-asivq-cai",
  });

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Beranda />,
    },
    {
      path: '/fraud',
      element: <Fraud />,
    },
    {
      path: '/kontak',
      element: <Kontak />,
    },
    {
      path: '/feature',
      element: <Feature />,
    },
    {
      path: '/faq',
      element: <FAQ />,
    },
     {
      path: '/result-fraud',
      element: <ResultFraud />,
    },
     {
      path: '/admin/',
      element: <AdminBeranda />,
    },
  ]);

  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

initializeApp();