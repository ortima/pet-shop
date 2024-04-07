/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
const CatalogCard = ({ item, filterType, filterPrice }) => {
  if (filterType && item.type !== filterType) {
    return null
  }

  const itemPrice = parseFloat(item.price)
  if (filterPrice && itemPrice > filterPrice) {
    return null
  }
  return (
    <div
      key={item.id}
      className="w-[250px] rounded-xl overflow-hidden shadow-lg flex flex-col gap-1"
    >
      <Link to={`/catalog/${item.id}`}>
        <img
          className="size-60 self-center cursor-pointer"
          src={item.mainImage}
          alt="Main Image"
        />
      </Link>
      <div className="px-6 py-4 flex flex-col gap-2">
        <h2 className="text-xl font-semibold tracking-tight text-gray-900">
          {item.name}
        </h2>
        <p>{item.description}</p>
        <div className="rounded-lg bg-yellow-500 w-fit h-fit font-regular inline-flex gap-1 text-ellipsis px-3 py-1 text-sm">
          <p>{item.brand}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-3xl font-bold text-gray-900">{item.price}₽</p>
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default CatalogCard
