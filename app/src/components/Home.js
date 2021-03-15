import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <h1>New Day Finance</h1>
        <Link className="button" to="/coins">Coin Info</Link>
      </div>
    </div>
  )
}
