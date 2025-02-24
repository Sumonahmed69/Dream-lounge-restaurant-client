import { Link, Outlet } from "react-router";
import {
  FaAd,
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
import { useContext, useState } from "react";
import avatarImg from "../../src/assets/image/placeholder.jpg";
import useAdmin from "../hooks/useAdmin";
import { GrLogout } from "react-icons/gr";

import { HiOutlineMenuAlt2 } from "react-icons/hi";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [cart] = useCart();
  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const toogleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div>
        <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
          <div className="p-3 lg:px-5 lg:pl-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-start rtl:justify-end">
                <button
                  onClick={toogleSidebar}
                  className="inline-flex items-center p-2 text-sm text-gray-500 
             rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none 
              focus:ring-2 focus:ring-gray-200"
                >
                  <HiOutlineMenuAlt2 className="text-2xl" />
                </button>
                <Link to="/" className="flex ms-2 md:me-24">
                  <img
                    src="/public/icon.png"
                    className="h-8 me-2 font-bold text-xl "
                    alt=""
                  />

                  <span className="self-center font-bold text-xl sm:text-2xl whitespace-nowrap">
                    Dream Lounge Restaurant
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <aside
          className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20
         bg-gray-800 border-r text-white border-gray-200 sm:translate-x-0 transition-transform ${
           isOpen ? "translate-x-0" : "-translate-x-full"
         }`}
        >
          <img src="/public/icon2.png" className="h-16 ml-5" alt="" />
          <div className="h-full px-3 pb-4 overflow-y-auto ">
            <ul className="space-y-2 font-medium menu">
              {isAdmin ? (
                <>
                  <li className="hover:bg-gray-500 rounded">
                    <Link to="/dashboard/adminHome">
                      <FaHome></FaHome>
                      <span>Admin Home</span>
                    </Link>
                  </li>
                  <li className="hover:bg-gray-500 rounded">
                    <Link to="/dashboard/addItems">
                      <FaUtensils></FaUtensils>
                      <span>Add Items</span>
                    </Link>
                  </li>
                  <li className="hover:bg-gray-500 rounded">
                    <Link to="/dashboard/manageItems">
                      <FaList></FaList>
                      <span>Manage Items</span>
                    </Link>
                  </li>

                  <li className="hover:bg-gray-500 rounded">
                    <Link to="/dashboard/users">
                      <FaUsers></FaUsers>
                      <span>All Users</span>
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="hover:bg-gray-500 rounded">
                    <Link to="/dashboard/userHome">
                      <FaHome></FaHome>
                      <span>User Home</span>
                    </Link>
                  </li>
                  <li className="hover:bg-gray-500 rounded">
                    <Link to="/dashboard/reservation">
                      <FaCalendar></FaCalendar>
                      <span>Reservation</span>
                    </Link>
                  </li>
                  <li className="hover:bg-gray-500 rounded">
                    <Link to="/dashboard/cart">
                      <FaShoppingCart></FaShoppingCart>
                      <span>My Cart ({cart.length})</span>
                    </Link>
                  </li>
                  <li className="hover:bg-gray-500 rounded">
                    <Link to="/dashboard/review">
                      <FaAd></FaAd>
                      <span>Add a Review</span>
                    </Link>
                  </li>
                  <li className="hover:bg-gray-500 rounded">
                    <Link to="/dashboard/paymentHistory">
                      <FaList></FaList>
                      <span>Payment History</span>
                    </Link>
                  </li>
                </>
              )}

              <hr className="divider  w-50" />
              <hr className="divider  w-50" />
              <li className="hover:bg-gray-500 rounded">
                <Link to="/">
                  <FaHome></FaHome>
                  <span>Home</span>
                </Link>
              </li>
              <li className="hover:bg-gray-500 rounded">
                <Link to="/order/salad">
                  <FaSearch></FaSearch>
                  <span>Menu</span>
                </Link>
              </li>
              <li className="hover:bg-gray-500 rounded">
                <button onClick={logOut}>
                  <GrLogout />
                  <span>Logout</span>
                </button>
              </li>

              <li>
                {user ? (
                  <>
                    <div className="flex  justify-star">
                      <img
                        className="rounded-full"
                        referrerPolicy="no-referrer"
                        src={user && user.photoURL ? user.photoURL : avatarImg}
                        alt="profile"
                        height="30"
                        width="30"
                      />
                    </div>
                  </>
                ) : (
                  <></>
                )}

                <span className="bg-gray-700">{user.displayName}</span>
              </li>
            </ul>
          </div>
        </aside>
      </div>

      <div className=" p-4 sm:ml-64 flex gap-2 mt-14 flex-col lg:flex-row translate-all">
        {/* outlet */}
      </div>
      <Outlet />
    </div>
  );
};

export default Dashboard;
