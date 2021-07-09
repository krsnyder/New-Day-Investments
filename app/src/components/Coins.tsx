import React from 'react'
import Coin from './Coin'
import { connect } from 'react-redux'

interface Props {
  coins: {
    id: string;
    symbol: string;
    name: string;
    image: {
      large: string
    }
  }[]
}
const Coins: React.FC<Props> = (props: Props) => {
  return (
    <div id="coins">
      {props.coins.map(coin => {
        return <Coin key={coin.id} coinDetails={coin} />
      })}
    </div>
  )
}

const mapStateToProps = (state: any) => {
  return {coins: state.coins}
}

export default connect(mapStateToProps)(Coins)