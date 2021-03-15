import React from 'react'
import { connect } from 'react-redux'

const Details = () => {
  return (
    <div className="details">
      
    </div>
  )
}

const mapStateToProps = (state) => {
  return ({
    name: state.currentCoin.name,
    symbol: state.currentCoin.symbol,
    price: state.currentCoin.market_data.current_price.usd,
    description: state.currentCoin.description.en,
    categories: state.currentCoin.categories
  })
}

export default connect(mapStateToProps)(Details)