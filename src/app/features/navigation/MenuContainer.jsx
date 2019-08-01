import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "./../../../context/auth";
import NavInternal from "./NavInternal";
import NavExternal from "./NavExternal";

function MenuContainer() {
  const { user, logout } = useContext(AuthContext);
  const pathname = window.location.pathname;
  const path = pathname === "/" ? "home" : pathname.substr(1);
  const [activeItem, setActiveItem] = useState(path);

  const handleItemClick = (e, { name }) => setActiveItem(name);

  const menuBar = user ? <NavInternal /> : <NavExternal />;

  return menuBar;
}

export default MenuContainer;
