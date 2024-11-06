import React from 'react';
import { PiShoppingCartBold } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const links = <>
          <li><NavLink to= "/">Home</NavLink></li>
          <li><NavLink to='/statistics'>Statistics</NavLink></li>
          <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
    </>

    return (
        <div>
            <nav>
            <div className="navbar px-12 bg-[#9538E2]">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Gadget Heaven</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className='flex gap-4 items-center justify-center'>
                        <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center'>
                            <PiShoppingCartBold />
                        </div>
                        <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center'>
                            <FaRegHeart />
                        </div>
                    </div>
                </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;