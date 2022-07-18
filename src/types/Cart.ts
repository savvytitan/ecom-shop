import { Furniture } from './Furniture'

export interface CachedCartItemType {
  _id: string
  count: number
}

export interface CartItemType extends Readonly<Furniture> {
  count: number
}
