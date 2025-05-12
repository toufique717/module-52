import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import user from '../../../../assets/user.png'
import { Authconetext } from '../../../../provider/Authprovider';

const Navbar = () => {

  const { user, logout } = useContext(Authconetext);

  const handlesignout = () =>
  {

    logout()
    .then()
    .catch()

  }

    const navlinks = 
    <>
    
    <li><NavLink to="/"> Home </NavLink></li>
    <li><NavLink> About </NavLink></li>
    <li><NavLink> Career</NavLink></li>
     <li><NavLink to="/login">Login</NavLink></li>
     <li><NavLink to="/register">Register</NavLink></li>
    
    </>
    return (
        <div>
            <h2 className='text-3xl'>this is navbar</h2>
            <div className="navbar bg-base-100">
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
         {navlinks}
      </ul>
    </div>
     
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
       {navlinks}
    </ul>
  </div>
  <div className="navbar-end">
     <div className='flex gap-4'>
     <img className='bg-black'src={user} alt="Imported photo" />

     {
      user ?

      <button onClick={handlesignout} className='btn'>Signout</button>

      :

<NavLink className="btn" to='/login' >Login </NavLink>
     }
      
      {/* <NavLink className="btn" to='/login' >Login </NavLink> */}
     </div>
  </div>
</div>
        </div>
    );
};

export default Navbar;