import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ProductList from "./pages/product-list.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "primereact/resources/themes/lara-light-blue/theme.css"; // theme
import "primereact/resources/primereact.min.css"; // core css
import "primeicons/primeicons.css"; // icons
import "primeflex/primeflex.css";
import "./main.css";
import Root from "./pages/root.jsx";
import Error from "./pages/error.jsx";
import ProductInfo from "./pages/product-info.jsx";
import ProductInvest from "./pages/product-invest.jsx";
import Partners from "./pages/partners.jsx";

async function poolAndDeptFootprintsLoader() {
  const urlElements = window.location.href.split("/");
  const poolFootprint = urlElements[3];
  const deptFootprint = urlElements[4];
  return {
    poolFootprint,
    deptFootprint,
  };
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/:poolFootprint/:deptFootprint",
        element: <ProductList />,
        loader: poolAndDeptFootprintsLoader,
        errorElement: <Error />,
      },
    ],
  },
  {
    path: "/partners",
    element: <Partners />,
    errorElement: <Error />,
  },
  {
    path: "/product-info",
    element: <ProductInfo />,
    errorElement: <Error />,
  },
  {
    path: "/product-invest",
    element: <ProductInvest />,
    errorElement: <Error />,
  },
  {
    path: "/error",
    element: <Error />,
  },
]);

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
