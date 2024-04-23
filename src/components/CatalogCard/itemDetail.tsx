import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useCatalog } from '../../context/CatalogContext'
import { useCart } from '../../context/CartContext'
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner'
import { CartContextType } from '../../context/types/cartTypes'

const ItemDetail: React.FC = () => {
  const { items } = useCatalog()
  const { itemId } = useParams()
  const { addToCart } = useCart() as CartContextType

  const item = items.find((item) => item.id === itemId)

  if (!item) {
    return <LoadingSpinner isLoading={true} />
  }

  return (
    <div>
      <Link to="/catalog">Назад</Link>

      <div className="flex">
        <img
          className="size-96 self-center"
          src={item.imageSrc}
          alt="Main Image"
        />
        <div className="px-6 py-4 flex flex-col gap-2">
          <h2 className="text-xl font-semibold tracking-tight text-gray-900">
            {item.name}
          </h2>
          <p>{item.description}</p>
          <p>{item.fulldesc}</p>
          <div className="rounded-lg bg-yellow-500 w-fit h-fit font-regular inline-flex gap-1 text-ellipsis px-3 py-1 text-sm">
            <p>{item.brand}</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-3xl font-bold text-gray-900">{item.price}₽</p>
            <button
              onClick={() => addToCart(item)}
              className="text-black bg-white border-2 border-black hover:bg-orange-500 hover:text-white hover:border-none font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              Добавить
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
