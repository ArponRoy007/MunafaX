import React from 'react';

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom sticky-top"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container p-2">
        <a className="navbar-brand" href="/">
          <img
            src="/media/images/logo2.png"
            style={{ width: "140px" }}
            alt="MunafaX Logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link px-3" aria-current="page" href="/signup">
                Signup
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="/products">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="/pricing">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="/support">
                Support
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="/menu">
                <i className="fa fa-bars" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;