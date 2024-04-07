import { useParams, Link } from 'react-router-dom'
import { useCatalog } from '../../context/CatalogContext'

const ItemDetail = () => {
  const { items } = useCatalog()
  const { itemId } = useParams()

  const item = items.find((item) => item.id === itemId)

  if (!item) {
    return <div>Загрузка...</div>
  }

  return (
    <div>
      <Link to="/catalog">Назад</Link>

      <div className="flex">
        <img
          className="size-96 self-center"
          src={item.mainImage}
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
            <a
              href=""
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
