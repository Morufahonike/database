
import { Link } from 'react-router-dom'


import '../navbar/Navbar.css'

import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className="nav">
         <Link to="/">Event</Link>
         <Link to="/talent">Talent</Link>
      </div>
    </div>
  )
}

export default Navbar
