import { useState } from 'react'
import { useCatalog } from './../context/CatalogContext'
import CatalogCard from '../components/CatalogCard/CatalogCard'
import Pagination from '../utils/Pagination'
import Filter from '../utils/Filter'
import { useSearchParams } from 'react-router-dom'
import Search from '../components/Search/Search'

const Catalog = () => {
  const { items, loading } = useCatalog()
  const [searchParams, setSearchParams] = useSearchParams()
  const [filterType, setFilterType] = useState(null)
  const [filterPrice, setFilterPrice] = useState(null)

  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(4)

  const search = searchParams.get('item')

  const handleSearch = (e) => {
    setSearchParams({ item: e.target.value })
    setFilterType(null)
    setFilterPrice(null)
    setCurrentPage(1)
  }

  const handleFilterType = (type) => {
    setFilterType(type)
    setSearchParams((prevSearchParams) => ({
      ...prevSearchParams,
      type: type,
    }))
  }

  const handleFilterPrice = (price) => {
    setFilterPrice(price)
    setSearchParams((prevSearchParams) => ({
      ...prevSearchParams,
      price: price,
    }))
  }

  const handleReset = () => {
    setFilterType(null)
    setFilterPrice(null)
    setSearchParams({})
    setCurrentPage(1)
  }

  const filteredItems = items.filter((item) => {
    // Фильтрация по типу
    if (filterType && item.type !== filterType) {
      return false
    }
    // Фильтрация по цене
    if (filterPrice && parseFloat(item.price) > filterPrice) {
      return false
    }
    // Фильтрация по поисковому запросу
    if (
      search &&
      !(
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase()) ||
        item.brand.toLowerCase().includes(search.toLowerCase())
      )
    ) {
      return false
    }
    return true
  })

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <>
      <Filter
        filterType={filterType}
        filterPrice={filterPrice}
        setFilterType={setFilterType}
        setFilterPrice={setFilterPrice}
      />
      <Search handleSearch={handleSearch} />
      <section className="flex max-w-screen-xl gap-10 mx-auto">
        <aside className="w-[300px] flex flex-col gap-3">
          <div className="flex flex-col gap-3 bg-zinc-300 p-4">
            <h1 className="text-xl text-center">Категория</h1>
            <p
              className="cursor-pointer"
              onClick={() => handleFilterType('cat')}
            >
              Кошки
            </p>
            <p
              className="cursor-pointer"
              onClick={() => handleFilterType('dog')}
            >
              Собаки
            </p>
            <p
              className="cursor-pointer"
              onClick={() => handleFilterType('fish')}
            >
              Рыбки
            </p>
          </div>
          <div className="flex flex-col gap-3 bg-zinc-300 p-4">
            <h1 className="text-xl text-center">По цене</h1>
            <p
              className="cursor-pointer"
              onClick={() => handleFilterPrice('400')}
            >
              до 400
            </p>
            <p
              className="cursor-pointer"
              onClick={() => handleFilterPrice('600')}
            >
              до 600
            </p>
            <p
              className="cursor-pointer"
              onClick={() => handleFilterPrice('100')}
            >
              до 100
            </p>
          </div>
          <button
            className="cursor-pointer p-4 bg-orange-500 mx-auto rounded-lg"
            onClick={handleReset}
          >
            Сбросить фильтр
          </button>
        </aside>

        {loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            <div className="flex flex-wrap gap-4 justify-between">
              {currentItems.map((item) => (
                <CatalogCard
                  key={item.id}
                  item={item}
                  filterType={filterType}
                  filterPrice={filterPrice}
                />
              ))}
            </div>
            <Pagination
              itemsPerPage={itemsPerPage}
              totalItems={filteredItems.length}
              paginate={paginate}
            />
          </div>
        )}
      </section>
    </>
  )
}

export default Catalog
