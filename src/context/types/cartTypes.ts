export interface Product {
  id: string
  name: string
  price: number
  imageSrc: string
}

export interface CartItem {
  product: Product
  quantity: number
  price: number
}

export interface CartContextType {
  cart: {
    items: CartItem[]
    totalPrice: number
    totalCount: number
  }
  addToCart: (product: Product) => void
  removeFromCart: (productId: string) => void
  changeQuantity: (cartItem: CartItem, newQuantity: number) => void
}
