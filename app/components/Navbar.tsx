"use client";
import React from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();
const cantact = pathname === "/contact";
const propreties = pathname ==="/properties";
const home = pathname ==="/"
  return (
    <>
      <div className="sub-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8">
              <ul className="info">
                <li>
                  <i className="fa fa-envelope"></i> info@company.com
                </li>
                <li>
                  <i className="fa fa-map"></i> Sunny Isles Beach, FL 33160
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4">
              <ul className="social-links">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://x.com/minthu" target="_blank">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <a href="/" className="logo">
                  <h1>Villa</h1>
                </a>

                <ul className="nav">
                  <li>
                    <a href="/" className={home ? "active" : ""}>
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="properties" className={propreties ? "active" : ""}>
                      Properties
                    </a>
                  </li>

                  <li>
                    <a href="contact" className={cantact ? "active" : ""}>
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-calendar"></i> Schedule a visit
                    </a>
                  </li>
                </ul>
                <a className="menu-trigger">
                  <span>Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}