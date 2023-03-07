import React from "react";
import { NavLink } from "react-router-dom"

function NavBar() {
    return (
        <nav className="nav-bar">
            <NavLink to="/">Home<br/></NavLink>
            <NavLink to="/new-post">new post<br/></NavLink>
            <NavLink to="/feed">Feed<br/></NavLink>
            <NavLink to="/search">search<br/></NavLink>
            

        </nav>
    );
}

export default NavBar; 