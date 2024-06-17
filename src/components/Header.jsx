import { Link } from "react-router-dom";
import logo from "../images/header-logo.png";
import searchIcon from "../images/icons/searchIcon.png";
import shopCartIcon from "../images/icons/shopping-cart.png";
import "./Header.css";
import { useAuth } from "../context/GlobalState";

import { auth } from "../firebase";

export default function Header() {
  const { user, basket } = useAuth();

  function handleAuthenticationSignOut() {
    auth.signOut();
  }
  return (
    <div className="header">
      <Link to="/">
        <img className="header-logo" src={logo} alt="logo-img" />
      </Link>
      <div className="header-search">
        <input className="header-searchInput" type="text" />
        <img className="header-searchIcon" src={searchIcon} alt="search-icon" />
      </div>
      <div className="header-nav">
        <Link to={!user && "/login"}>
          <div className="header-option" onClick={handleAuthenticationSignOut}>
            <span className="header-optionLineOne">
              Hello {user ? `${user.email}` : "Guest"}
            </span>
            <span className="header-optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header-option">
            <span className="header-optionLineOne">Returns</span>
            <span className="header-optionLineTwo">& Orders</span>
          </div>
        </Link>
        <div className="header-option">
          <span className="header-optionLineOne">Your</span>
          <span className="header-optionLineTwo">Prime</span>
        </div>
        <Link to={user ? "/checkout" : "/login"}>
          <div className="header-optionBasket">
            <img src={shopCartIcon} />
            <span className="header-optionLineTwo header-basketCount">
              {basket.length == null ? "0" : basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
