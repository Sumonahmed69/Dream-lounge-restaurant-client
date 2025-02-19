import { NavLink, Outlet } from "react-router";
import {
  FaAd,
  FaBook,
  FaCalendar,
  FaHome,
  FaList,
  FaSearch,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import useCart from "../hooks/useCart";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";
import avatarImg from "../../src/assets/image/placeholder.jpg";
import useAdmin from "../hooks/useAdmin";
import { GrLogout } from "react-icons/gr";

const Dashboard = () => {
  // TODO: get isAdmin value from the database
  // const isAdmin = true

  const [isAdmin] = useAdmin();

  const [cart] = useCart();
  const { user, logOut } = useContext(AuthContext);
  return (
    <div>
      <div className="flex">
        {/* dashboard side bar */}
        <div className="w-64 min-h-screen bg-orange-400">
          <ul className="menu p-4">
            {isAdmin ? (
              <>
                <li>
                  <NavLink to="/dashboard/adminHome">
                    <FaHome></FaHome>
                    Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/addItems">
                    <FaUtensils></FaUtensils>
                    Add Items
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageItems">
                    <FaList></FaList>
                    Manage Items
                  </NavLink>
                </li>
               
                <li>
                  <NavLink to="/dashboard/users">
                    <FaUsers></FaUsers>
                    All Users
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/dashboard/userHome">
                    <FaHome></FaHome>
                    User Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/reservation">
                    <FaCalendar></FaCalendar>
                    Reservation
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/cart">
                    <FaShoppingCart></FaShoppingCart>
                    My Cart ({cart.length})
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/review">
                    <FaAd></FaAd>
                    Add a Review
                  </NavLink>
                </li>
                <li>
                <NavLink to="/dashboard/paymentHistory">
                    <FaList></FaList>
                    Payment History
                  </NavLink>
                </li>
              </>
            )}
            <div className="divider"></div>
            <li>
              <NavLink to="/">
                <FaHome></FaHome>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/order/salad">
                <FaSearch></FaSearch>
                Menu
              </NavLink>
            </li>
            <li>
              <button onClick={logOut}>
                <GrLogout />

                <span>Logout</span>
              </button>
            </li>

            <li>
              {user ? (
                <>
                  <div className="flex items-center gap-2">
                    <img
                      className="rounded-full"
                      referrerPolicy="no-referrer"
                      src={user && user.photoURL ? user.photoURL : avatarImg}
                      alt="profile"
                      height="30"
                      width="30"
                    />
                    {user.displayName}
                  </div>
                </>
              ) : (
                <></>
              )}
            </li>
          </ul>
        </div>
        {/* dashboard content */}
        <div className="flex-1 p-8">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
