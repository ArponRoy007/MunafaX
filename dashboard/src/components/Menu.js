import React, { useState, useEffect } from "react"; // ✅ Added useEffect
import axios from "axios";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);

  // ✅ FIX: Catch the URL parameters when the Dashboard loads
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const urlEmail = urlParams.get("email");
    const urlToken = urlParams.get("token");

    // If they exist in the URL, save them to the Dashboard's localStorage
    if (urlEmail && urlToken) {
      localStorage.setItem("email", urlEmail);
      localStorage.setItem("token", urlToken);
      
      // Clean up the URL so the user doesn't see the token in their address bar
      window.history.replaceState({}, document.title, "/");
    }
  }, []);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = async () => {
    try {
      const email = localStorage.getItem("email");
      
      // Now this will successfully find the email!
      if (email) {
        await axios.post("http://localhost:3002/deleteUser", {
          email: email
        });
      }

      localStorage.removeItem("token");
      localStorage.removeItem("email");

      window.location.href = "http://localhost:3001/signup";

    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  // ... rest of your Menu component code stays exactly the same

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="/logo.png" style={{ width: "50px" }} alt="logo" />

      <div className="menus">
        <ul>
          <li>
            <Link to="/" style={{ textDecoration: "none" }} onClick={() => handleMenuClick(0)}>
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>Dashboard</p>
            </Link>
          </li>

          <li>
            <Link to="/orders" style={{ textDecoration: "none" }} onClick={() => handleMenuClick(1)}>
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>Orders</p>
            </Link>
          </li>

          <li>
            <Link to="/holdings" style={{ textDecoration: "none" }} onClick={() => handleMenuClick(2)}>
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>Holdings</p>
            </Link>
          </li>

          <li>
            <Link to="/positions" style={{ textDecoration: "none" }} onClick={() => handleMenuClick(3)}>
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>Positions</p>
            </Link>
          </li>

          <li>
            <Link to="/funds" style={{ textDecoration: "none" }} onClick={() => handleMenuClick(4)}>
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>Funds</p>
            </Link>
          </li>

          <li>
            <Link to="/apps" style={{ textDecoration: "none" }} onClick={() => handleMenuClick(5)}>
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>Apps</p>
            </Link>
          </li>
        </ul>

        <hr />

        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>

      </div>
    </div>
  );
};

export default Menu;