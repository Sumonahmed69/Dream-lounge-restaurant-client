import { createBrowserRouter } from "react-router";
import HomePage from "../page/Home/HomePage";
import Login from "../page/Login";
import Registration from "../page/Registration";
import OurMenuPage from "../page/Menu/OurMenuPage";

import ContactPage from "../page/Contactpage/ContactPage";
import OrderPage from "../page/orderPage/OrderPage";
import Error from "../page/Error";
import PrivateRoute from "./PrivateRoute";
import Main from "../Layout/Main";
import Dashboard from "../Layout/Dashboard";
import Cart from "../page/DashBoard/Cart";
import AllUsers from "../page/DashBoard/AllUsers";
import AddItems from "../page/DashBoard/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../page/DashBoard/ManageItems";
import UpdateItem from "../page/DashBoard/UpdateItem";
import Payment from "../page/DashBoard/Payment‎/Payment‎";
import PaymentHistory from "../page/DashBoard/Payment‎/PaymentHistory";
import AdminHome from "../page/DashBoard/AdminHome/AdminHome";
import UserHome from "../page/DashBoard/UserHome‎";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
      },
      {
        path: "menu",
        element: <OurMenuPage></OurMenuPage>,
      },
      {
        path: `/order/:category`,
        element: <OrderPage></OrderPage>,
      },
      {
        path: "/contact",
        element: (
          <PrivateRoute>
            {" "}
            <ContactPage></ContactPage>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      // normal user routes
      {
        path: 'userHome',
        element: <UserHome></UserHome>
      },
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      {
        path: 'payment',
        element: <Payment></Payment>
      },
      {
        path: 'paymentHistory',
        element: <PaymentHistory></PaymentHistory>
      },
      // admin only routes
      {
        path: 'adminHome',
        element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
      },
      {
        path: "addItems",
        element: (
          <AdminRoute>
            <AddItems></AddItems>
          </AdminRoute>
        ),
      },
      {
        path: "manageItems",
        element: (
          <AdminRoute>
            <ManageItems></ManageItems>
          </AdminRoute>
        ),
      },
      {
        path: "updateItem/:id",
        element: (
          <AdminRoute>
            <UpdateItem></UpdateItem>
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/menu/${params.id}`),
      },
      {
        path: "users",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
    ],
  },
  {
    path: "login",
    element: <Login></Login>,
  },
  {
    path: "/registration",
    element: <Registration></Registration>,
  },
]);
