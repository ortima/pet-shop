import { useState, useEffect } from 'react'
import { useCatalog } from './../context/CatalogContext'
import CatalogCard from '../components/CatalogCard/CatalogCard'
import Pagination from '../utils/Pagination'
import Filter from '../utils/Filter'
import { useSearchParams } from 'react-router-dom'
import Search from '../components/Search/Search'
import { LoadingSpinner } from '../components/LoadingSpinner/LoadingSpinner'

const Catalog = () => {
  const { items, loading } = useCatalog()
  const [searchParams, setSearchParams] = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedType, setSelectedType] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(6)

  useEffect(() => {
    // При изменении параметров поиска обновляем состояния категории и типа
    const category = searchParams.get('category')
    const type = searchParams.get('type')
    setSelectedCategory(category)
    setSelectedType(type)
  }, [searchParams])

  const handleSearch = (e) => {
    setSearchParams({ item: e.target.value })
    setSelectedCategory(null)
    setSelectedType(null)
    setCurrentPage(1)
  }

  const handleFilterCategory = (category) => {
    setSelectedCategory(category)
    setSearchParams((prevSearchParams) => {
      const params = new URLSearchParams(prevSearchParams)
      params.set('category', category)
      return params
    })
  }

  const handleFilterType = (type) => {
    setSelectedType(type)
    setSearchParams((prevSearchParams) => {
      const params = new URLSearchParams(prevSearchParams)
      params.set('type', type)
      return params
    })
  }
  const handleReset = () => {
    setSelectedCategory(null)
    setSelectedType(null)
    setSearchParams({})
    setCurrentPage(1)
  }

  const filteredItems = items.filter((item) => {
    // Фильтрация по категории
    if (selectedCategory && item.category !== selectedCategory) {
      return false
    }
    // Фильтрация по типу
    if (selectedType && item.type !== selectedType) {
      return false
    }
    // Фильтрация по поисковому запросу
    const search = searchParams.get('item')
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
        selectedCategory={selectedCategory}
        selectedType={selectedType}
        setSelectedCategory={setSelectedCategory}
        setSelectedType={setSelectedType}
      />
      <Search handleSearch={handleSearch} />
      <LoadingSpinner isLoading={loading} />
      {!loading && (
        <section className="flex max-w-screen-xl gap-10 mx-auto">
          <aside className="min-w-[300px] flex flex-col gap-3">
            <div className="flex flex-col gap-3 bg-zinc-300 p-4">
              <h1 className="text-xl text-center">Категория</h1>
              <p
                className="cursor-pointer"
                onClick={() => handleFilterCategory('foods')}
              >
                Корм
              </p>
              <p
                className="cursor-pointer"
                onClick={() => handleFilterCategory('toys')}
              >
                Игрушки
              </p>
              <p
                className="cursor-pointer"
                onClick={() => handleFilterCategory('accessories')}
              >
                Аксессуары
              </p>
            </div>
            <div className="flex flex-col gap-3 bg-zinc-300 p-4">
              <h1 className="text-xl text-center">Тип</h1>
              <p
                className="cursor-pointer"
                onClick={() => handleFilterType('dog')}
              >
                Собака
              </p>
              <p
                className="cursor-pointer"
                onClick={() => handleFilterType('cat')}
              >
                Кошка
              </p>
              <p
                className="cursor-pointer"
                onClick={() => handleFilterType('fish')}
              >
                Рыбка
              </p>
              <p
                className="cursor-pointer"
                onClick={() => handleFilterType('bird')}
              >
                Птица
              </p>
            </div>
            <button
              className="cursor-pointer p-4 bg-orange-500 mx-auto rounded-lg"
              onClick={handleReset}
            >
              Сбросить фильтр
            </button>
          </aside>

          <div>
            <div className="flex flex-wrap gap-4 justify-around">
              {currentItems.map((item) => (
                <CatalogCard key={item.id} item={item} />
              ))}
            </div>
            <Pagination
              itemsPerPage={itemsPerPage}
              totalItems={filteredItems.length}
              paginate={paginate}
            />
          </div>
        </section>
      )}
    </>
  )
}

export default Catalog
