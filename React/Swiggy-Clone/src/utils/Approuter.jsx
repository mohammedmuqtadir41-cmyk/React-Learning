import { createBrowserRouter } from "react-router-dom";
import Body from "../components/Body";
import About from "../pages/About";
import Cart from "../pages/Cart";
import Help from "../pages/Help";
import Offers from "../pages/Offers";
import SignIn from "../pages/SignIn";
import Error from "../pages/Error";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    errorElement: <Error />,
    children: [
      {
        path: "offers",
        element: <Offers />,
      },
      {
        path: "help",
        element: <Help />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

export default appRouter;