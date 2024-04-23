export interface CatalogItem {
  id: string
  name: string
  description: string
  fulldesc: string
  price: number
  brand: string
  category: string
  type: string
  imageSrc: string
  addedOn: Date
  hit: string
}

export interface CatalogContextType {
  items: CatalogItem[]
  loading: boolean
}
