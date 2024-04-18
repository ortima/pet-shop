import CartEmpty from '../components/Cart/CartEmpty'
import { useCart } from '../context/CartContext'

const CartPage = () => {
  const { cart, removeFromCart, changeQuantity } = useCart()

  return (
    <>
      {cart.totalCount === 0 ? (
        <CartEmpty />
      ) : (
        <div className="pt-20">
          <h1 className="mb-10 text-center text-2xl font-bold">Корзина</h1>
          <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div className="rounded-lg md:w-2/3">
              {cart && cart.items.length > 0 && (
                <div>
                  <ul>
                    {cart.items.map((cartItem) => (
                      <li key={cartItem.product.id}>
                        <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-lg sm:flex sm:justify-start">
                          <img
                            src={cartItem.product.imageSrc}
                            alt={cartItem.product.name}
                            className="w-full rounded-lg sm:w-40"
                          />
                          <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between items-center">
                            <h2 className="text-lg font-bold text-gray-900">
                              {cartItem.product.name}
                            </h2>
                            <div className="mt-5 sm:mt-0">
                              <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                                <div className="flex items-center border-gray-100">
                                  <span
                                    onClick={() =>
                                      changeQuantity(
                                        cartItem,
                                        cartItem.quantity - 1
                                      )
                                    }
                                    className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-orange-500 hover:text-blue-50"
                                  >
                                    {' '}
                                    -{' '}
                                  </span>
                                  <input
                                    className="h-8 w-8 border bg-white text-center text-xs outline-none"
                                    type="number"
                                    value={cartItem.quantity}
                                    min="1"
                                    onChange={(e) =>
                                      changeQuantity(
                                        cartItem,
                                        parseInt(e.target.value)
                                      )
                                    }
                                  />
                                  <span
                                    onClick={() =>
                                      changeQuantity(
                                        cartItem,
                                        cartItem.quantity + 1
                                      )
                                    }
                                    className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-orange-500 hover:text-blue-50"
                                  >
                                    {' '}
                                    +{' '}
                                  </span>
                                </div>
                                <div className="flex items-center space-x-4">
                                  <p className="text-sm">{cartItem.price}₽</p>
                                  <svg
                                    onClick={() =>
                                      removeFromCart(cartItem.product.id)
                                    }
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M6 18L18 6M6 6l12 12"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <aside className="w-[300px] flex flex-col gap-3">
              <div className="rounded-lg bg-white p-4 shadow-md">
                <div className="mb-2 flex justify-between">
                  <p className="text-gray-700">Стоимость без скидки</p>
                  <p className="text-gray-700">{cart.totalPrice}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-700">Количество</p>
                  <p className="text-gray-700">{cart.totalCount}</p>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between">
                  <p className="text-lg font-bold">Общая стоимость</p>
                  <div className="flex flex-col">
                    <p className="mb-1 text-lg font-bold text-right">
                      {cart.totalPrice}
                    </p>
                    <p className="text-sm text-gray-700">(включая НДС)</p>
                  </div>
                </div>
                <button className="mt-6 w-full rounded-md bg-orange-500 py-1.5 font-medium text-blue-50 hover:bg-orange-600">
                  Оплатить
                </button>
              </div>
            </aside>
          </div>
        </div>
      )}
    </>
  )
}

export default CartPage
