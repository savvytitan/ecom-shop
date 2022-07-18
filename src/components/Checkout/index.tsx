import React, { Dispatch, useCallback } from 'react'
import { Button, CartItem } from '../../components'
import { CartItemType } from '../../types'

import { useDispatch } from 'react-redux'
import { AddToCartAction, RemoveFromCartAction, CheckoutAction } from '../../redux/actions/checkout'

import './styles.scss'

interface Props {
  open: boolean
  cart: Array<CartItemType>
}

const Checkout: React.FC<Props> = ({ open, cart }) => {
  const cartDispatch =
    useDispatch<Dispatch<AddToCartAction | RemoveFromCartAction | CheckoutAction>>()

  // Memoize handleCheckoutClick() for better performance
  const handleCheckoutClick = useCallback(() => {
    cartDispatch({ type: 'CHECKOUT' })
  }, [cartDispatch])

  return (
    <div className={open ? 'checkout slide-out' : 'checkout'}>
      <div className="checkout__cart">
        {cart.length === 0 ? (
          <div className="checkout__cart__empty">Cart is empty.</div>
        ) : (
          cart.map((c) => (
            <CartItem
              key={c._id}
              data={c}
              onDeleteClick={() => {
                cartDispatch({ type: 'REMOVE_FROM_CART', payload: c._id })
              }}
            />
          ))
        )}
      </div>
      <div className="checkout__action">
        <div className="checkout__action__summary">
          <span>Total</span>
          <span>{`$${cart.reduce((acc, e) => acc + e.tradePrice * e.count, 0)}`}</span>
        </div>
        <Button role="CHECKOUT" onClick={handleCheckoutClick}>
          CHECKOUT
        </Button>
      </div>
    </div>
  )
}

export default Checkout
