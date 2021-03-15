import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <div className="nav">
      <NavLink activeClassName="active" to="/">Home</NavLink>
      <NavLink activeClassName="active" to="/coins">Coin List</NavLink>
    </div>
  )
}
