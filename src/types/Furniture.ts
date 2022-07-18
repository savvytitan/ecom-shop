export type FurnitureColor = 'Black' | 'Grey' | 'White'
export type TradeCurrency = 'CAD' | 'USD'
export type FulhuasCategory = 'Outdoor Furniture' | 'Bench' | 'Bed' | 'Dining Chair'

export interface Furniture {
  _id: string
  imageURLs: Array<string>
  casePackQty: number
  modifiedOn: string
  createdOn: string
  SKU: string
  MAP: number
  itemName: string
  material: string
  width: number
  length: number
  height: number
  weight: number
  color: FurnitureColor
  vendorProductCategory: string
  vendorItemDescription: string
  tradePrice: number
  itemLink: string
  weightUnit: string
  dimensionUnit: string
  MSRP: number
  tradeCurrency: TradeCurrency
  variants: string
  vendorName: string
  vendorID: string
  vendorAirtableID: string
  vendorRegion: string
  vendorProductName: string
  dimension: string
  stockQty: number
  stockDate: number
  restockDate: string | null
  fulhausCategory: FulhuasCategory
}
