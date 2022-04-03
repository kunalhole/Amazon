import { Search, ShoppingBasket } from "@mui/icons-material"
import React from "react"
import { Link } from "react-router-dom"
import { auth } from "./firebase"
import { signOut } from "firebase/auth"
import "./Header.css"
import { useStateValue } from "./StateProvider"
const Header = () => {
  const [{ basket, user }] = useStateValue()

  const login = () => {
    if (user) {
      signOut(auth)
    }
  }
  return (
    <nav className="header">
      {/* Amazon Log on the left */}
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon icon"
        />
      </Link>
      {/* Search Box */}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <Search className="header__searchIcon" />
      </div>

      {/* 3 Links to Right*/}

      {/* 1st link */}

      <div className="header__nav">
        <Link to={!user && "/login"} className="header__link">
          <div onClick={login} className="header__option">
            <span className="header__optionLineOne">Hello, {user?.email}</span>
            <span className="header__optionLineTwo">
              {user ? "Sing Out" : "Sing In"}
            </span>
          </div>
        </Link>

        {/* 2nd link */}

        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        {/* 3rd link */}

        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>

        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            {/* Shoopint Basket icon  */}
            <ShoppingBasket />
            {/* Number of item in the basket */}
            <span className="header__optionLineTwo  header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>

      {/* Basket icon with number */}
    </nav>
  )
}

export default Header
