import React from "react";
import classes from "./navbar.module.css";
import logo from "../../Images/grocery-store.png";
import searchIcon from "../../Images/search.png";
import bagIcon from '../../Images/shopping-bag.png'

const Navbar = () => {
  return (
    <div className={classes.navCont}>
      <div className={classes.logoAndSearch}>
        <img src={logo} alt="logo here" className={classes.logo} />
        <div className={classes.logoText}>BuyEz</div>
        <div className={classes.searchBar}>
          <img src={searchIcon} className={classes.searchIcon} />
          <input className={classes.searchInput} />
        </div>
      </div>
      <div className={classes.userBagAbout}>
        <div className={classes.login}>Login</div>
        <div className={classes.bagSec}>
          <img src = {bagIcon}  className={classes.bagIcon}/>
          <div>Bag</div>
        </div>
        <div className={classes.about}>About</div>
      </div>
    </div>
  );
};

export default Navbar;
