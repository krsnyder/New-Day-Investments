import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div className="nav">
      <Link className="link" to="/">Home</Link>
      <Link className="link" to="/coins">Coin List</Link>
    </div>
  )
}
