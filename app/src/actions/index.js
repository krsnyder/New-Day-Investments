import axios from 'axios'
export const GET_LIST = "GET_LIST"
export const SET_CURRENT_COIN = "SET_CURRENT_COIN"
export const GET_COINS = "GET_COINS"
export const LOADING_DETAILS = "LOADING_DETAILS"

export const getDetails = (id) => {
  
  return dispatch => {  
    dispatch({ type: LOADING_DETAILS })
    
    axios
      .get(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then(res => {
        dispatch({ type: SET_CURRENT_COIN, payload: res.data });
      })
      .catch(err => console.log(err))

  }
}