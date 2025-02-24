import { Link } from "react-router";
import logo from "../../../../public/icon.png";
import avatarImg from "../../../assets/image/placeholder.jpg";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { GiMilkCarton } from "react-icons/gi";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";
import { FaCartPlus } from "react-icons/fa";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const [isAdmin] = useAdmin();
  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/order/pizza">Order Food</Link>
      </li>

      <li>
        <Link to="/contact">Contact</Link>
      </li>
      {user && isAdmin && (
        <li>
          <Link to="/dashboard/adminHome">Dashboard</Link>
        </li>
      )}
      {user && !isAdmin && (
        <li>
          <Link to="/dashboard/userHome">Dashboard</Link>
        </li>
      )}

      <li>
        <Link to="/dashboard/cart">
          <button className=" flex items-center">
            <FaCartPlus className="mr-1"  />

            <div className="badge badge-primary">{cart.length}</div>
          </button>
        </Link>
      </li>
      <li>
        <Link to="/login">
          {user ? (
            <>
              <div className="flex items-center gap-2" onClick={logOut}>
                <img
                  className="rounded-full"
                  referrerPolicy="no-referrer"
                  src={user && user.photoURL ? user.photoURL : avatarImg}
                  alt="profile"
                  height="30"
                  width="30"
                />
                Logout
              </div>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
            </>
          )}
        </Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="  navbar fixed z-10 bg-opacity-30  bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className=" menu menu-sm dropdown-content bg-base-100 text-black rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navOptions}
            </ul>
          </div>
          <Link to="/">
            <div className="flex  items-center ">
              <img className="h-16 ml-2" src={logo} alt="" />
              <h2 className="ml-3 text-2xl font-bold ">
                Dream Lounge Restaurant
              </h2>
            </div>
          </Link>
        </div>
        <div className=" navbar-end hidden lg:flex ">
          <ul className=" menu menu-horizontal items-center justify-center px-1">
            {navOptions}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
