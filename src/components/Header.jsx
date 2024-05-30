import { Link } from "react-router-dom";
import logo from "../images/header-logo.png";
import searchIcon from "../images/icons/searchIcon.png";
import shopCartIcon from "../images/icons/shopping-cart.png";
import "./Header.css";
export default function Header() {
  return (
    <div className="header">
      <Link to={"/"}>
        <img className="header-logo" src={logo} alt="" />
      </Link>
      <div className="header-search">
        <input type="text" className="header-searchInput" />
        <img src={searchIcon} alt="" className="header-searchIcon" />
      </div>
      <div className="header-nav">
        <Link to="/login">
          <div className="header-option">
            <div className="header-optionLineOne">Hello Guest</div>
            <div className="header-optionLineTwo">Sign In</div>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header-option">
            <div className="header-optionLineOne">Returns</div>
            <div className="header-optionLineTwo">& Orders</div>
          </div>
        </Link>
        <div className="header-option">
          <div className="header-optionLineOne">your</div>
          <div className="header-optionLineTwo">Prime</div>
        </div>
        <Link to="/ckeckout">
          <div className="header-option">
            <div className="header-optionBasket">
              <img src={shopCartIcon} alt="" />
              <span className="header-optionLineTwo header-basketCount">3</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
