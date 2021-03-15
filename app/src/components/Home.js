import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h1>Prestige Crypto Tracking</h1>
      <Link to="/coins">Coin Info</Link>
    </div>
  )
}
