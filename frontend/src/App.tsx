import "./App.css";
import "./index.css";

import { Outlet } from "react-router-dom";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/HomePage";
import Petstore from "./pages/Petstore";
import ShopPet from "./pages/ShopPet";
import PetList from "./pages/PetList";
import Admin from "./pages/Admin";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function Root() {
  return (
    <>
      <div className="navStyle">
        <Navbar />
      </div>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

function App() {
  const router = createHashRouter([
    {
      children: [
        {
          element: <Home />,
          path: "/",
        },
        {
          element: <Petstore />,
          path: "/pets",
        },
        {
          element: <ShopPet />,
          path: "/shop",
        },
        {
          element: <PetList />,
          path: "/petlist",
        },
        {
          element: <Admin />,
          path: "/admin",
        },
      ],
      element: <Root />,
    },
  ]);

  // return <RouterProvider router={router} />;
  return (
    <>
      <RouterProvider router={router}>
        <div>
          <Outlet />
        </div>
      </RouterProvider>
    </>
  );
}

export default App;
