import React from 'react'
import { connect } from 'react-redux'

const Details = (props) => {
  // const [display, setDisplay] = useState(false)

  return (
    <div className="details-container">
      <div className="header">
        <h1>{props.name}</h1>
        <img src={props.image} alt={props.name}/>
      </div>

      <div className="details">
        <div className="extras">
          <p>Symbol: {props.symbol}</p>
          <p>${props.price} USD</p>
          <p>Categories: </p>
          {props.categories.map(category => {
            return <p>{category}</p>
          }
          )}
        </div>

        <div className="description">
          <p>{props.description.substring(0, 350)}...</p>
        </div>
      </div>

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