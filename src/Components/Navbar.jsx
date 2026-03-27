import { Link, NavLink } from "react-router";
import logo from '../assets/logo.png'
import { FaGithub } from "react-icons/fa";


const Navbar = () => {
    const links =[
        <NavLink className={'m-2'}  to={'/'}>Home</NavLink>,
        <NavLink className={'m-2'} to={'/Apps'}>Apps</NavLink>,
        <NavLink className={'m-2'} to={'/Installation'}>Installation</NavLink>
    ]
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow  font-semibold"
          >
            {links}
          </ul>
        </div>
        <Link to={'/'} className="btn btn-ghost text-lg"> <img className="h-8 w-8" src={logo} alt="" /><span className="text-purple-600 font-bold">HERO.IO</span></Link >
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold  ">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-linear-to-r from-[#6b36e5] to-[#995cf0] text-white"><FaGithub />Contribute</a>
      </div>
    </div>
  );
};

export default Navbar;
