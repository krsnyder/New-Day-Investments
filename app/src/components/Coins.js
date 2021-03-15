import React from 'react'
import Coin from './Coin'
import { connect } from 'react-redux'


const Coins = props => {
  return (
    <div id="coins">
      Coins
    </div>
  )
}

export default connect(null, null)(Coins)