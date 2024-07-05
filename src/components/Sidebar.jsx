"use client";
import { useEffect, useState } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Link from "next/link";
import Image from "next/image";
import { dashboard, doctor, logout, menuicon10, menuicon16 } from "./imagepath";
import Scrollbars from "react-custom-scrollbars-2";

const Sidebar = (props) => {
  const [sidebar, setSidebar] = useState("");

  useEffect(() => {
    if (props?.id && props?.id1) {
      const ele = document.getElementById(props.id);
      handleClick({ target: ele }, props.id, props.id1);
    }
  }, [props?.id, props?.id1]);

  const handleClick = (e, item, item1) => {
    const div = document.getElementById(item);
    const ulDiv = document.querySelector(`.${item1}`);

    if (e.target.classList.contains("subdrop")) {
      ulDiv.style.display = "none";
      div.classList.remove("subdrop");
    } else {
      ulDiv.style.display = "block";
      div.classList.add("subdrop");
    }
  };

  const expandMenu = () => {
    document.body.classList.remove("expand-menu");
  };

  const expandMenuOpen = () => {
    document.body.classList.add("expand-menu");
  };

  return (
    <div className="sidebar" id="sidebar">
      <Scrollbars
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
        autoHeight
        autoHeightMin={0}
        autoHeightMax="95vh"
        thumbMinSize={30}
        universal={false}
        hideTracksWhenNotNeeded={true}
      >
        <div className="sidebar-inner slimscroll">
          <div
            id="sidebar-menu"
            className="sidebar-menu"
            onMouseLeave={expandMenu}
            onMouseOver={expandMenuOpen}
          >
            <ul>
              <li className="menu-title">Main</li>
              <li className="submenu">
                <Link
                  className={
                    props?.activeClassName === "dashboard" ? "active" : ""
                  }
                  href="/"
                  id="menu-item"
                  onClick={(e) => {
                    handleClick(e, "menu-item", "menu-items");
                  }}
                >
                  <span className="menu-side">
                    <Image src={dashboard} alt="" />
                  </span>{" "}
                  <span> Page d'accueil </span>
                </Link>
                <ul
                  style={{
                    display: sidebar === "Dashboard" ? "block" : "none",
                  }}
                  className="menu-items"
                ></ul>
              </li>
              <li className="submenu">
                <Link
                  className={
                    props?.activeClassName === "doctors" ? "active" : ""
                  }
                  href="/Medecins"
                  id="menu-item1"
                  onClick={(e) => {
                    handleClick(e, "menu-item1", "menu-items1");
                  }}
                >
                  <span className="menu-side">
                    <Image src={doctor} alt="" />
                  </span>{" "}
                  <span> Médecins </span>
                </Link>
                <ul
                  style={{
                    display: sidebar === "Doctors" ? "block" : "none",
                  }}
                  className="menu-items1"
                ></ul>
              </li>
              <li>
                <Link
                  className={props?.activeClassName === "chat" ? "active" : ""}
                  href="/Chat"
                >
                  <span className="menu-side">
                    <Image src={menuicon10} alt="" />
                  </span>{" "}
                  <span>Chat</span>
                </Link>
              </li>
              <li>
                <Link
                  className={
                    props?.activeClassName === "calendar" ? "active" : ""
                  }
                  href="/Calendrier"
                >
                  <i className="fa fa-calendar" /> <span>Calendrier</span>
                </Link>
              </li>
              <li>
                <Link
                  className={
                    props?.activeClassName === "parametres" ? "active" : ""
                  }
                  href="/Parametres"
                >
                  <span className="menu-side">
                    <Image src={menuicon16} alt="" />
                  </span>{" "}
                  <span>Paramètres</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="logout-btn">
            <Link href="/">
              <span className="menu-side">
                <Image src={logout} alt="" />
              </span>{" "}
              <span>Se Déconnecter</span>
            </Link>
          </div>
        </div>
      </Scrollbars>
    </div>
  );
};

export default Sidebar;
