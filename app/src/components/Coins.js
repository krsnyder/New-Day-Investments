import React from 'react'
import Coin from './Coin'
import { connect } from 'react-redux'


const Coins = props => {
  return (
    <div id="coins">
      {props.coins.map(coin => {
        return <Coin key={coin.id} coinDetails={coin} />
      })}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {coins: state.coins}
}

export default connect(mapStateToProps)(Coins)