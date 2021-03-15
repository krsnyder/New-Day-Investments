import axios from 'axios'
export const GET_LIST = "GET_LIST"
export const GET_DETAILS = "GET_DETAILS"

export const getDetails = (id) => {
  return dispatch => {
    dispatch({ type: GET_DETAILS });

    axios
      .get(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then(res => {
        console.log(res.data)
      })
      .catch(err => console.log(err))

  }
}