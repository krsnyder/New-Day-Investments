import React from 'react'
import { connect } from 'react-redux'

const Details = (props) => {
  return (
    <div className="details">
      <div className="header">
        <h1>{props.name}</h1>
        <img src={props.image} alt={props.name}/>
      </div>
      <h2>{props.symbol}</h2>

      <div className="resources">

      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return ({
    name: state.currentCoin.name,
    symbol: state.currentCoin.symbol,
    image: state.currentCoin.image.large,
    price: state.currentCoin["market_data"]["current_price"].usd,
    description: state.currentCoin.description.en,
    categories: state.currentCoin.categories
  })
}

export default connect(mapStateToProps)(Details)