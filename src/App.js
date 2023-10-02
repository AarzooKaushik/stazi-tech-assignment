import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./components/errorPage";
import RootLayout from "./pages/Root";

import Products from "./components/products/index";
import "./App.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: "true", element: <Products /> },
      {
        path: "products/:page",
        element: <Products />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <div className="body">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
