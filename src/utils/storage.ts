import { CachedCartItemType } from '../types'

/**
 * @param cart Cart items to store in local storage
 * @returns void
 * @description Store the items passed by cart in local storage in JSON string
 */
export const setCart = (cart: Array<CachedCartItemType>): void => {
  window.localStorage.setItem('cart', JSON.stringify(cart))
}

/**
 * @returns Cached cart items
 * @description Read local storage and returns the stored cart items
 */
export const getCart = (): Array<CachedCartItemType> => {
  const cached: string | null = window.localStorage.getItem('cart')
  if (cached) {
    return JSON.parse(cached) as Array<CachedCartItemType>
  }
  return []
}
