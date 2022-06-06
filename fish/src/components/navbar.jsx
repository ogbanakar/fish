import React from 'react'
import './navbar.scss';
import blaa from '../images/blaa.png'
const Navbar = () => {
  return (
    <nav className="hello">
      <a href='#' className='logo'>
        <img src={blaa} alt='' />
      </a>
      
    </nav>
  )
}
export default Navbar