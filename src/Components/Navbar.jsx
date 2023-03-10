import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar.jsx"

function NavBar({ allUsers, changeUser, currentUser,setCurrentSearch }) {
  console.log(allUsers);
  const userOptions = allUsers.map((user) => {
    const strungout = JSON.stringify(user);
    console.log(JSON.parse(strungout));
    console.log(user);
    console.log(JSON.stringify(user));
    return (
      <li>
        <a
          key={user.id}
          value={strungout}
          onClick={() => handleSelect(strungout)}
        >
          {user.name}
        </a>
      </li>
    );
  });
  function handleSelect(strung) {
    //console.log(JSON.parse(e.target.value));
    const currentUser = JSON.parse(strung);
    changeUser(currentUser);
  }
  return (
    <div className="navbar bg-base-100 border-b-2">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/new-post">New Post</NavLink>
            </li>
            <li>
              <NavLink to="/feed">Feed</NavLink>
            </li>
            <li>
              <NavLink to="/account">Account</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost normal-case text-xl">Shreddit</a>
      </div>
      <div className="navbar-end">
       <SearchBar setCurrentSearch={setCurrentSearch}/>
        {/* <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge badge-xs badge-primary indicator-item border-2"></span>
          </div>
        </button> */}
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost rounded-btn">
            <div className="avatar">
              <div className="w-12 rounded-full flex flex-col items-center justify-center ">
                <img
                  src={currentUser.propic}
                  className="min-w-full max-w-fit overflow-hidden"
                />
              </div>
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4"
          >
            {userOptions}
          </ul>
        </div>
      </div>
    </div>
    // <nav className="border-solid shadow-xs rounded-lg bg-slate-200 border-red-500 border-2 l-full w-1/6 ">
    //   <select
    //     key="dropdown"
    //     name="type"
    //     id="type"
    //     aria-label="type"
    //     onChange={(e) => {
    //       handleSelect(e);
    //     }}
    //   >
    //     {userOptions}
    //   </select>
    //   <br />
    //   <NavLink to="/">Home</NavLink>
    //   <br />
    //   <NavLink to="/new-post">new post</NavLink>
    //   <br />
    //   <NavLink to="/feed">Feed</NavLink>
    //   <br />
    //   <NavLink to="/search">search</NavLink>
    // </nav>
  );
}

export default NavBar;
