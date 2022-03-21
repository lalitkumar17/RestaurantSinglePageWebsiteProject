import React from 'react'
import './Navigation.css'
import Logo from '../../constant/Image'

  const Navigation = () => {
  return (
    <nav className='nav'>
      <div className='nav__image'>
      <img src={Logo.navlogo} alt="hay" />
      </div>
      
      <ul className='nav__center-menu'>
        <li>
         <a href="#home">Home</a>
        </li>
        <li>
         <a href="#home">Page</a>
        </li>
        <li>
         <a href="#home">ContactUs</a>
        </li>
        <li>
         <a href="#home">Blog</a>
        </li>
      </ul>

        <ul className='nav__right-menu'>
          <li>
            <a href="#home">LogIn/Registration</a>
          </li>
          <li><div className='nav__right-menu__verticle-line'></div></li>
          <li>
            <a href="#home">BookTable</a>
          </li>
        </ul>


    </nav>
  )
}

export default Navigation;
