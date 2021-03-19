import { Link } from "gatsby"
import Logo from "../images/ricola-logo.png"
import React from "react"
import Menu from "../images/burger.svg"

const Header = () => (

  <header>

    <div className='header'>
      <Link className='header-logo' to='http://localhost:8000'>
        <img className='ricola-logo' src={Logo}/>
      </Link>

      <div className='header-menu'>
        <img src={Menu}/>
      </div>

    </div>
  </header>

)

export default Header
