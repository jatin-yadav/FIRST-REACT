import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
      <Link to="/" className="link">CRICKET MATCH</Link>
      <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      </ul>
    </div>
    )
  }
}

export default Navbar;
