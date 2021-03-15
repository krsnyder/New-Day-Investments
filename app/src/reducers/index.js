import { GET_DETAILS } from '../actions'

const initialState = {
  coins: [
    {"id": "chainlink",
    "symbol": "link",
    "name": "Chainlink",
    "image": {
      "large": "https://assets.coingecko.com/coins/images/877/large/chainlink-new-logo.png?1547034700"
    }
    },
    {
      "id": "nano",
      "symbol": "nano",
      "name": "Nano",
      "image": {
        "large": "https://assets.coingecko.com/coins/images/756/large/nano-coin-logo.png?1547034501"
      }
    },
    {
      "id": "enjincoin",
      "symbol": "enj",
      "name": "Enjin Coin",
      "image": {
        "large": "https://assets.coingecko.com/coins/images/1102/large/enjin-coin-logo.png?1547035078"
      }
    }
  ]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case (GET_DETAILS):
      return ({
        ...state,

      })
    default:
      return state
  }
}

export default reducer