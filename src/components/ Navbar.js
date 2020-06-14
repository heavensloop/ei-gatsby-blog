import React from 'react';

import { NavLink } from "react-router-dom";


const Navbar = ({ children, location }) => {

  const navList = [
    {nav: '/', label: 'welcome'},
    {nav: '/about', label: 'about'},
    {nav: '/showcase', label: 'showcase'},
    {nav: '/talks', label: 'talks'},
  ]

  // const Navbar = props => (
  //   <nav id="navigation" className="u-margin-top-smaller">
  //     <ul className="navigation--list u-right-text u-margin-right u-margin-left">
  //       {props.children}
  //     </ul>
  //   </nav>
  // )

  const Menu = ({nav, label}) => (
    <li className={location.pathname === nav ? 'navigation--item is-active' : 'navigation--item'}>
      <NavLink to={nav}>{label}</NavLink>
    </li>
  )


  return (
    
    <NavBar>
      {navList.map((menuItem, index) => (
        <Menu label={menuItem.label} nav={menuItem.nav} key={index} />
      ))}
    </NavBar>

  )
}

export default  Navbar;
