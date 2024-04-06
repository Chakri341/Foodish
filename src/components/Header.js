import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import LOGO from "../images/LOGO.png"

const Header = () => {

  const onlineStatus = useOnlineStatus();


  // Subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 md:bg-orange-400">
      <div className="flex items-center ml-5">
        <img className="w-16 shadow-lg  rounded-lg" src={LOGO} alt="logo" />
      <div  className="shadow-lg">
        <h1 className="px-4 font-bold text-xl  rounded-lg">Foodish</h1>
      </div>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 shadow-lg">
          <li className="px-4">Online: {onlineStatus ? "✅" : "❌"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 font-bold text-xl">
            <Link to="/cart">Cart - ({cartItems.length} items)</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
