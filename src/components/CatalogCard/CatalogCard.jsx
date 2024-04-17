import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import toast, { Toaster } from 'react-hot-toast'
const CatalogCard = ({ item, filterType, filterPrice }) => {
  const { addToCart } = useCart()
  if (filterType && item.type !== filterType) {
    return null
  }

  const itemPrice = parseFloat(item.price)
  if (filterPrice && itemPrice > filterPrice) {
    return null
  }

  const handleAddToCart = (item) => {
    addToCart(item)
    toast.success(`${item.name} добавлен в корзину`)
  }
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div
        key={item.id}
        className="w-[300px] rounded-xl overflow-hidden shadow-lg flex flex-col gap-1"
      >
        <Link to={`/catalog/${item.id}`}>
          <img
            className="w-fit cursor-pointer"
            src={item.imageSrc}
            alt="Main Image"
          />
        </Link>
        <div className="px-6 py-4 flex flex-col gap-2">
          <h2 className="text-xl min-h-[40px] font-semibold tracking-tight text-gray-900">
            {item.name}
          </h2>
          <p className="min-h-[80px]">{item.description}</p>
          <div className="rounded-lg bg-yellow-500 w-fit h-fit font-regular inline-flex gap-1 text-ellipsis px-3 py-1 text-sm">
            <p>{item.brand}</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-3xl font-bold text-gray-900">{item.price}₽</p>
            <button
              onClick={() => {
                handleAddToCart(item)
              }}
              className="text-white px-5 py-2 rounded-[50px] font-semibold transition-all duration-75 bg-orange-500 hover:bg-black hover:scale-110"
            >
              Добавить
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CatalogCard
