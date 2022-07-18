import {
  AddToCartAction,
  RemoveFromCartAction,
  CheckoutAction,
  InitializeCartAction,
} from '../actions'
import { Storage } from '../../utils'
import { CachedCartItemType } from '../../types'

interface CheckoutState {
  cart: Array<CachedCartItemType>
}

const initialState: CheckoutState = {
  cart: [],
}

const CheckoutReducer = (
  state: CheckoutState = initialState,
  action: InitializeCartAction | AddToCartAction | RemoveFromCartAction | CheckoutAction,
): CheckoutState => {
  try {
    switch (action.type) {
      case 'INITIALIZE_CART':
        // Initialize cart
        return {
          ...state,
          cart: action.payload,
        }
      case 'ADD_TO_CART':
        // Cart can hold up to 100 items
        if (state.cart.reduce((acc, c) => acc + c.count, 0) > 100) {
          return state
        }

        // Add items to cart
        const added = state.cart.find((c) => c._id === action.payload)
          ? state.cart.map((c) => {
              if (c._id === action.payload) return { ...c, count: c.count + 1 }
              else return c
            })
          : [...state.cart, { _id: action.payload, count: 1 }]

        // Store the updated cart
        Storage.setCart(added)

        // Update redux
        return {
          ...state,
          cart: added,
        }
      case 'REMOVE_FROM_CART':
        // Remove an item from cart
        const removed = state.cart.filter((c) => c._id !== action.payload)

        // Store the updated cart
        Storage.setCart(removed)

        // Update redux
        return {
          ...state,
          cart: removed,
        }
      case 'CHECKOUT':
        // Empty cart in local storage
        Storage.setCart([])

        // Update redux
        return {
          ...state,
          cart: [],
        }
      default:
        return state
    }
  } catch (error) {
    console.error(error)
    return state
  }
}

export default CheckoutReducer
