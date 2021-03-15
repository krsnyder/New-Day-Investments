import React from 'react'
import { connect } from 'react-redux'
import {getDetails} from '../actions'

const Coin = props => {
  console.log(props)
  return (
    <div
      onClick={() => props.getDetails(props.coinDetails.id)}
      className="coin-card">
      <img src={props.coinDetails.image.large} alt={props.coinDetails.name}/>
      <p>{props.coinDetails.name}</p>
      <p>{ props.coinDetails.symbol }</p>
    </div>
  )
}


export default connect(null, {getDetails})(Coin)
