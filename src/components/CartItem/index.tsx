import React from 'react'
import { Close } from '../../icons'
import { CartItemType } from '../../types'
import './styles.scss'

interface Props {
  data: CartItemType
  onDeleteClick: () => void
}

const CartItem: React.FC<Props> = ({ data, onDeleteClick }) => {
  return (
    <div className="cart-item">
      <div
        className="cart-item__image"
        style={{ backgroundImage: `url(${data.imageURLs[0]})` }}></div>
      <div className="cart-item__info">
        <div>
          <div className="cart-item__info__item-name">{data.itemName}</div>
          <div className="cart-item__info__brand">{data.vendorName}</div>
        </div>
        <div className="cart-item__info__price">{`$${data.tradePrice * data.count} = $${
          data.tradePrice
        } * ${data.count}`}</div>
      </div>
      <div className="cart-item__close">
        <Close onClick={onDeleteClick} />
      </div>
    </div>
  )
}

export default CartItem
