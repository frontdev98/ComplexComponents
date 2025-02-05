import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import { useState } from "react";
import { Outlet } from "react-router";

function Navigation() {
    const [state, setState] = useState({
      sidebar: false,
    });
  
    const toggleSidebar = () => 
      setState((prev) => Object.assign({}, prev, {sidebar: !prev.sidebar}));
  
    return <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isActive={state.sidebar} toggleSidebar={toggleSidebar} />
      <Outlet />
    </>;
}

export default Navigation;