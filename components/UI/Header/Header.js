import Account from "../Account/Account";
import SearchModal from "../SearchModal/SearchModal";
import Head from "next/head";
import { useState, useEffect } from "react";
import Image from "next/image";
import useRouter from "next/router";
import { useStateContext } from "../../AnimeProvider";

const Header = (props) => {
  const globalState = useStateContext();

  return (
    <header
      className={`top-header ${
        globalState.accountModalOpen || globalState.sideNavOpen
          ? "top-header--menu-open"
          : ""
      }`}
    >
      <div className="top-header__left-side">
        <div
          className="top-header__menu-btn"
          onClick={() => globalState.setSideNavOpenAction(true)}
        >
          <i className="fas fa-bars"></i>
        </div>
        <div
          className="top-header__search-btn"
          onClick={() => globalState.setSearchOpenAction(true)}
        >
          <i className="fas fa-search"></i>
        </div>
      </div>
      <div className="top-header__logo"></div>
      <div
        className="top-header__account"
        onClick={() =>
          globalState.setAccountModalOpenAction(!globalState.accountModalOpen)
        }
      >
        <img
          src="https://i.pinimg.com/originals/90/71/88/90718823e398e86b0260ff47d7187acd.jpg"
          className="top-header__user-img"
        />
        <div className="top-header__user-name">Renel</div>
      </div>
      <Account />
      <SearchModal />
    </header>
  );
};

export default Header;
