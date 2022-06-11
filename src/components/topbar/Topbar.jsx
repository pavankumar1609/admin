import React from "react";
import { Link } from "react-router-dom";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import "./topbar.css";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">E-ComAdmin</span>
        </div>
        <div className="topRight">
          <Link
            to="/logout"
            style={{ marginRight: 20, textDecoration: "none" }}
          >
            Logout
          </Link>
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            style={{ objectFit: "cover" }}
            src="https://firebasestorage.googleapis.com/v0/b/shop-2b9e1.appspot.com/o/IMG_20190928_123335_2-01.jpg?alt=media&token=5b47c28f-9164-4698-b718-5c3ab970adbf"
            alt="admin user"
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
