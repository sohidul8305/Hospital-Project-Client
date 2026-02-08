import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [theme, setTheme] = useState("light");

  // Dark/Light mode effect
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const navLinkClass = ({ isActive }) =>
    isActive ? "text-primary font-semibold" : "hover:text-primary";

  const handleLogout = () => {
    logOut()
      .then(() => console.log("Logged out"))
      .catch((err) => console.error(err));
  };

  return (
    <nav className="bg-base-100 shadow-md px-5">
      <div className="max-w-7xl mx-auto navbar">

        {/* Logo */}
        <div className="flex-1">
          <Link to="/" className="text-2xl font-bold text-primary">
            🏥 HospitalCare
          </Link>
        </div>

        {/* Menu Links */}
        <div className="hidden md:flex">
          <ul className="menu menu-horizontal gap-3 font-medium">

            {/* Common Links */}
            <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
            <li><NavLink to="/doctors" className={navLinkClass}>Doctors</NavLink></li>
            <li><NavLink to="/medicines" className={navLinkClass}>Medicines</NavLink></li>

            {/* Logged Out Links */}
            {!user && (
              <>
                <li><NavLink to="/about" className={navLinkClass}>About Us</NavLink></li>
                <li><NavLink to="/contact" className={navLinkClass}>Contact</NavLink></li>
                <li><NavLink to="/services" className={navLinkClass}>Services</NavLink></li>
                <li><NavLink to="/health_tips" className={navLinkClass}>Health Tips</NavLink></li>
              </>
            )}

            {/* Patient Links */}
            {user && user.role === "patient" && (
              <>
                <li><NavLink to="/dashboard" className={navLinkClass}>Dashboard</NavLink></li>
                <li><NavLink to="/my-appointments" className={navLinkClass}>Appointments</NavLink></li>
                <li><NavLink to="/my-orders" className={navLinkClass}>Orders</NavLink></li>
                <li><NavLink to="/bills" className={navLinkClass}>Bills</NavLink></li>
                <li><NavLink to="/notifications" className={navLinkClass}>🔔</NavLink></li>
              </>
            )}

            {/* Doctor Links */}
            {user && user.role === "doctor" && (
              <>
                <li><NavLink to="/dashboard" className={navLinkClass}>Doctor Dashboard</NavLink></li>
                <li><NavLink to="/my-patients" className={navLinkClass}>Patients</NavLink></li>
                <li><NavLink to="/my-appointments" className={navLinkClass}>Appointments</NavLink></li>
                <li><NavLink to="/prescriptions" className={navLinkClass}>Prescriptions</NavLink></li>
                <li><NavLink to="/reports" className={navLinkClass}>Reports</NavLink></li>
                <li><NavLink to="/notifications" className={navLinkClass}>🔔</NavLink></li>
              </>
            )}

            {/* Admin Links */}
            {user && user.role === "admin" && (
              <>
                <li><NavLink to="/admin/dashboard" className={navLinkClass}>Admin Dashboard</NavLink></li>
                <li><NavLink to="/manage-users" className={navLinkClass}>Manage Users</NavLink></li>
                <li><NavLink to="/manage-doctors" className={navLinkClass}>Manage Doctors</NavLink></li>
                <li><NavLink to="/manage-medicines" className={navLinkClass}>Manage Medicines</NavLink></li>
                <li><NavLink to="/appointments" className={navLinkClass}>Appointments</NavLink></li>
                <li><NavLink to="/reports" className={navLinkClass}>Reports</NavLink></li>
                <li><NavLink to="/notifications" className={navLinkClass}>🔔</NavLink></li>
              </>
            )}

          </ul>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2">

          {/* Theme Toggle */}
          <button onClick={toggleTheme} className="btn btn-ghost btn-circle">
            {theme === "light" ? "🌙" : "☀️"}
          </button>

          {/* Login/Register */}
          {!user && (
            <>
              <Link to="/login" className="btn btn-outline btn-sm">Login</Link>
              <Link to="/register" className="btn btn-primary btn-sm">Register</Link>
            </>
          )}

          {/* Avatar Dropdown */}
          {user && (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-9 rounded-full">
                  <img src={user.photoURL || "/default-avatar.png"} alt={user.displayName} />
                </div>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
                <li className="text-center font-semibold">{user.displayName}</li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/settings">Settings</Link></li>
                <li>
                  <button onClick={handleLogout} className="text-red-500 w-full text-left">Logout</button>
                </li>
              </ul>
            </div>
          )}

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
