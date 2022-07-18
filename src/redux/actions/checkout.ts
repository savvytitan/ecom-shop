import { CachedCartItemType } from '../../types'

export interface InitializeCartAction {
  readonly type: 'INITIALIZE_CART'
  payload: Array<CachedCartItemType>
}

export interface AddToCartAction {
  readonly type: 'ADD_TO_CART'
  payload: string
}

export interface RemoveFromCartAction {
  readonly type: 'REMOVE_FROM_CART'
  payload: string
}

export interface CheckoutAction {
  readonly type: 'CHECKOUT'
}
