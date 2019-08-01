import React, { useContext } from "react";
import { AuthContext } from "./../../../context/auth";
import { NavLink, Link, withRouter } from "react-router-dom";

function NavInternal() {
  const { user, logout } = useContext(AuthContext);
  return (
    <div class='navbar-container '>
      <nav class='navbar navbar-expand-lg navbar-light'>
        <div class='container'>
          <NavLink to='/' className='navbar-brand'>
            <img src='assets/img/logo.svg' alt='Leap' />{" "}
          </NavLink>
          <div class='d-flex align-items-center order-lg-3'>
            <div class='dropdown ml-2 show'>
              <img
                src='assets/img/avatars/female-4.jpg'
                alt='User'
                class='avatar avatar-sm dropdown-toggle'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='true'
              />
              <div class='dropdown-menu dropdown-menu-right dropdown-content'>
                <a class='dropdown-item' href='#'>
                  hi {user.lastName}
                </a>
                <a class='dropdown-item' href='#'>
                  Profile
                </a>
                <a onClick={logout} class='dropdown-item' href='#'>
                  Logout
                </a>
              </div>
            </div>
            <div class='ml-2'>
              <button
                class='navbar-toggler'
                type='button'
                data-toggle='collapse'
                data-target='.navbar-collapse'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  class='injected-svg icon navbar-toggler-open'
                  data-src='assets/img/icons/interface/menu.svg'
                  xmlnsXlink='http://www.w3.org/1999/xlink'
                >
                  <path
                    d='M3 17C3 17.5523 3.44772 18 4 18H20C20.5523 18 21 17.5523 21 17V17C21 16.4477 20.5523 16 20 16H4C3.44772 16 3 16.4477 3 17V17ZM3 12C3 12.5523 3.44772 13 4 13H20C20.5523 13 21 12.5523 21 12V12C21 11.4477 20.5523 11 20 11H4C3.44772 11 3 11.4477 3 12V12ZM4 6C3.44772 6 3 6.44772 3 7V7C3 7.55228 3.44772 8 4 8H20C20.5523 8 21 7.55228 21 7V7C21 6.44772 20.5523 6 20 6H4Z'
                    fill='#212529'
                  />
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  class='injected-svg icon navbar-toggler-close'
                  data-src='assets/img/icons/interface/cross.svg'
                  xmlnsXlink='http://www.w3.org/1999/xlink'
                >
                  <path
                    d='M16.2426 6.34311L6.34309 16.2426C5.95257 16.6331 5.95257 17.2663 6.34309 17.6568C6.73362 18.0473 7.36678 18.0473 7.75731 17.6568L17.6568 7.75732C18.0473 7.36679 18.0473 6.73363 17.6568 6.34311C17.2663 5.95258 16.6331 5.95258 16.2426 6.34311Z'
                    fill='#212529'
                  />
                  <path
                    d='M17.6568 16.2426L7.75734 6.34309C7.36681 5.95257 6.73365 5.95257 6.34313 6.34309C5.9526 6.73362 5.9526 7.36678 6.34313 7.75731L16.2426 17.6568C16.6331 18.0473 17.2663 18.0473 17.6568 17.6568C18.0474 17.2663 18.0474 16.6331 17.6568 16.2426Z'
                    fill='#212529'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavInternal;
