import React, { Component } from "react";
import "./Sidebar.css";
import { HashLink as Link } from "react-router-hash-link";
import { FiExternalLink } from "react-icons/fi";
import logo from "../images/mohammadjan.jpg";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div style={{ color: "darkblue" }} className="tagtop">
          {" "}
          Nano tech{" "}
        </div>
        <div style={{ color: "darkblue", fontWeight: "bold" }}>
          {" "}
          full stack developer{" "}
        </div>
        <div style={{ color: "darkblue" }} className="">
          {" "}
          # coding{" "}
        </div>
        <h1>
          <Link smooth to="/#start" className="h1_links">
            Mohammad Jan Nazami
          </Link>
        </h1>

        <img src={logo} />
        <p style={{ color: "darkblue", fontWeight: "bold" }} className="gmail">
          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJftvBffjPmxWxvfHWRHWnhTbpQgPxBxvkcnPpFpFqbhrXMCHXSJTsCXCVLsQzgRcVLpnPL"
            rel="opener noreferrer"
            target="_blank"
            className="fa fa-envelope"
          ></a>{" "}
          mohammdtaliq@gmail.com{" "}
        </p>

        <ul className="sidebar-nav">
          <li className="sidebar-nav-items">
            <Link smooth to="/#about" className="links">
              About
            </Link>
          </li>
          <li className="sidebar-nav-items">
            <Link smooth to="/#education" className="links">
              Education
            </Link>
          </li>
          <li className="sidebar-nav-items">
            <Link smooth to="/#interest" className="links">
              Interest
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
