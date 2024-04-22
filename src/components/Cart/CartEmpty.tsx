import React from 'react'
import EmptyCart from '/empty_cart.png'
import { Link } from 'react-router-dom'

const CartEmpty: React.FC = () => {
  return (
    <section className="flex flex-col items-center gap-4">
      <div className="text-center mx-auto mb-[20px] lg:mb-4 max-w-[510px]">
        <h2 className="font-bold text-3xl sm:text-4xl md:text-[30px] text-dark">
          <span className="text-primary">Корзина</span> пустая
        </h2>
      </div>{' '}
      <div className="flex flex-col gap-2 items-center">
        <p>Вероятнее всего, вы еще ничего не положили в корзину</p>
        <p>Для того чтобы оформить заказ, перейдите в каталог</p>
        <img src={EmptyCart} className="w-[300px]" alt="cart-empty" />
        <Link to="/catalog">
          <button
            type="button"
            className="text-white px-5 py-2 rounded-[50px] font-semibold transition-all duration-75 bg-orange-500 hover:bg-black hover:scale-110"
          >
            Перейти в каталог
          </button>
        </Link>
      </div>
    </section>
  )
}

export default CartEmpty
