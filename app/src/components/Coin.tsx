import React from 'react'
import { connect } from 'react-redux'
import {getDetails} from '../actions'
import {Link} from 'react-router-dom'

interface Props {
  coinDetails: {
    id: string;
    symbol: string;
    name: string;
    image: {
      large: string
    }
  };
  getDetails: (id: string) => {}
}

const Coin: React.FC<Props> = (props: Props) => {
  return (
    <Link to="/details">
      <div
        onClick={() => props.getDetails(props.coinDetails.id)}
        className="coin-card">
        <img src={props.coinDetails.image.large} alt={props.coinDetails.name}/>
        <p>{props.coinDetails.name}</p>
      </div>
    </Link>
  )
}


export default connect(null, {getDetails})(Coin)
