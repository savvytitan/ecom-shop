import axios from 'axios'

/**
 * @method GET
 * @url /get-products
 * @description Fetch all products from server
 * @returns AxiosPromise
 */
export const getProducts = () =>
  axios.request({
    method: 'GET',
    baseURL: process.env.REACT_APP_BASE_API_URL,
    url: '/get-products',
  })
