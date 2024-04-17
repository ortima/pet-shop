import { useState, useEffect } from 'react'
import { useCatalog } from './../context/CatalogContext'
import CatalogCard from '../components/CatalogCard/CatalogCard'
import Pagination from '../components/Pagination/Pagination'
import { useSearchParams } from 'react-router-dom'
import Search from '../components/Search/Search'
import { LoadingSpinner } from '../components/LoadingSpinner/LoadingSpinner'
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io'
import { GrPowerReset } from 'react-icons/gr'

const Catalog = () => {
  const { items, loading } = useCatalog()
  const [searchParams, setSearchParams] = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedType, setSelectedType] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(6)

  const [showCategoryModal, setShowCategoryModal] = useState(true)
  const [showTypeModal, setShowTypeModal] = useState(false)

  useEffect(() => {
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
    if (selectedCategory && item.category !== selectedCategory) {
      return false
    }
    if (selectedType && item.type !== selectedType) {
      return false
    }
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

  const filterOptions = [
    { label: 'Корм', value: 'foods' },
    { label: 'Игрушки', value: 'toys' },
    { label: 'Аксессуары', value: 'accessories' },
  ]

  const typeOptions = [
    { label: 'Собаки', value: 'dog' },
    { label: 'Кошки', value: 'cat' },
    { label: 'Рыбки', value: 'fish' },
    { label: 'Птицы', value: 'bird' },
  ]

  return (
    <>
      <section className="flex items-center justify-between">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          Каталог
        </h1>
        <Search handleSearch={handleSearch} />
        <button
          type="button"
          className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
        >
          Сортировка
        </button>
      </section>
      <div className="border-b-2 my-2 border-gray-300"></div>

      <LoadingSpinner isLoading={loading} />
      {!loading && (
        <section className="flex max-w-screen-xl gap-10 mx-auto">
          <aside className="min-w-[300px] flex flex-col gap-3">
            <div className="flex flex-col gap-3 p-4">
              <div
                className="flex justify-between items-center border-b-2 py-2 cursor-pointer"
                onClick={() => setShowCategoryModal(!showCategoryModal)}
              >
                <h1 className="text-xl text-center">Категория</h1>
                {showCategoryModal ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>
              <div className={showCategoryModal ? `visible` : `hidden`}>
                {filterOptions.map((option) => (
                  <p
                    key={option.value}
                    className="cursor-pointer mb-4"
                    onClick={() => handleFilterCategory(option.value)}
                  >
                    {option.label}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3 p-4">
              <div
                className="flex justify-between items-center border-b-2 py-2 cursor-pointer"
                onClick={() => setShowTypeModal(!showTypeModal)}
              >
                <h1 className="text-xl text-center">Тип</h1>
                {showTypeModal ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>
              <div className={showTypeModal ? `visible` : `hidden`}>
                {typeOptions.map((option) => (
                  <p
                    key={option.value}
                    className="cursor-pointer mb-4"
                    onClick={() => handleFilterType(option.value)}
                  >
                    {option.label}
                  </p>
                ))}
              </div>
            </div>
            <button
              type="button"
              className="cursor-pointer  flex justify-center gap-2 items-center tracking-wide text-white transition-colors duration-300 transform bg-orange-500 hover:bg-orange-700 px-4 py-2 font-medium  rounded-lg"
              onClick={handleReset}
            >
              <GrPowerReset />
              <span className="text-white">Сбросить</span>
            </button>
          </aside>

          <div>
            <div className="flex flex-wrap gap-12 justify-start mb-4">
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
