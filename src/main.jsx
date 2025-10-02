import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./componnets/Root/Root.jsx";
import Home from "./componnets/Home.jsx/Home.jsx";
import Mobiles from "./componnets/Mobiles/Mobiles.jsx";
import Laptop from "./componnets/Laptop/Laptop.jsx";
import Users from "./componnets/Users/Users.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "mobiles", Component: Mobiles },
      { path: "laptops", Component: Laptop },
      { path: "users",loader:()=>fetch('https://jsonplaceholder.typicode.com/users'), Component: Users },
    ],
  },
  {
    path: "/about",
    element: <div>This is About</div>,
  },
  {
    path: "/blogs",
    element: <div>This is Blogs</div>,
  },
  {
    path: "/app",
    element: <App />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
