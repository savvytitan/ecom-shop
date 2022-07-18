import React, { Dispatch, useCallback, useEffect, useState } from 'react'
import { StatusCodes } from 'http-status-codes'
import { Checkout, Collection, NavBar, Shop } from './components'
import { CartItemType, Furniture } from './types'
import { API, Storage } from './utils'

import { useSelector, useDispatch } from 'react-redux'
import { AppState } from './redux/reducers/root'
import {
  AddToCartAction,
  RemoveFromCartAction,
  CheckoutAction,
  InitializeCartAction,
} from './redux/actions/checkout'

import './App.scss'

const App: React.FC = () => {
  const { cart } = useSelector((state: AppState) => state.checkout)
  const cartDispatch =
    useDispatch<
      Dispatch<InitializeCartAction | AddToCartAction | RemoveFromCartAction | CheckoutAction>
    >()

  const [collection, setCollection] = useState<Array<Furniture>>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | undefined>()
  const [checkoutOpen, setCheckoutOpen] = useState<boolean>(false)
  const [cartItems, setCartItems] = useState<Array<CartItemType>>([])

  useEffect(() => {
    /**
     * Fetch all products from server and store them in local state
     */
    const getFurnitures = async () => {
      try {
        setLoading(true)
        const { data, status } = await API.getProducts()
        if (status === StatusCodes.OK) {
          setCollection(data || [])
          cartDispatch({ type: 'INITIALIZE_CART', payload: Storage.getCart() })
        } else {
          setError('Failed to fetch products.')
        }
      } catch (e) {
        console.error(e)
        setError('Failed to fetch products.')
      } finally {
        setLoading(false)
      }
    }

    getFurnitures()
  }, [cartDispatch])

  useEffect(() => {
    var temp: Array<CartItemType> = []
    cart.forEach((c) => {
      const p = collection.find((cc) => cc._id === c._id)
      if (p) temp = [...temp, { ...p, count: c.count }]
    })
    setCartItems(temp)
  }, [collection, cart])

  // Memoize the callback of cart click event
  const handleCartClick = useCallback(() => {
    setCheckoutOpen((prev) => !prev)
  }, [setCheckoutOpen])

  return (
    <div className="app">
      <NavBar onCartClick={handleCartClick} />
      <div className="container">
        <Shop brand="Patio Furniture" imgSrc="/static/images/patio-furniture.png" />
        <Collection data={collection} loading={loading} error={error} />
      </div>
      <Checkout open={checkoutOpen} cart={cartItems} />
    </div>
  )
}

export default App
