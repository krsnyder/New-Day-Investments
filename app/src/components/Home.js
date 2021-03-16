import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <h1>New Day Investment</h1>
        <Link className="button" to="/coins">Click here to view our holdings</Link>
      </div>
    </div>
  )
}
