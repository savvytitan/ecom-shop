import React, { Dispatch, useCallback } from 'react'
import { Button } from '../../components'
import { Furniture } from '../../types'

// Redux
import { useDispatch } from 'react-redux'
import { AddToCartAction, RemoveFromCartAction, CheckoutAction } from '../../redux/actions/checkout'

import './styles.scss'

interface Props {
  data: Readonly<Furniture>
}

const CollectionItem: React.FC<Props> = ({ data }) => {
  const cartDispatch =
    useDispatch<Dispatch<AddToCartAction | RemoveFromCartAction | CheckoutAction>>()

  const handleAddToCartClick = useCallback(() => {
    cartDispatch({ type: 'ADD_TO_CART', payload: data._id })
  }, [cartDispatch, data._id])

  return (
    <div className="collection-item">
      <div
        className="collection-item__image"
        style={{ backgroundImage: `url(${data.imageURLs[0]})` }}
      />
      <div className="collection-item__overlay">
        <div className="collection-item__overlay__info-1">
          <div className="collection-item__overlay__info__item-name">{data.itemName || ''}</div>
          <div className="collection-item__overlay__info__vendor-name">{data.vendorName || ''}</div>
        </div>
        <div className="collection-item__overlay__info-2">
          <Button role="ADD_TO_CART" onClick={handleAddToCartClick}>
            + Add to cart
          </Button>
          <div className="collection-item__overlay__info__price">${data.tradePrice}</div>
        </div>
      </div>
    </div>
  )
}

export default CollectionItem
