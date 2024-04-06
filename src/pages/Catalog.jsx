import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { useCatalog } from './../context/CatalogContext'
import CatalogCard from '../components/CatalogCard/CatalogCard'
import Filter from '../utils/Filter'

const Catalog = () => {
  const { items, loading } = useCatalog()
  const [filterType, setFilterType] = useState(null)
  const [filterPrice, setFilterPrice] = useState(null)

  const handleFilterType = (type) => {
    setFilterType(type)
  }
  const handleFilterPrice = (price) => {
    setFilterPrice(price)
  }

  const handleReset = () => {
    setFilterType(null)
    setFilterPrice(null)
  }
  return (
    <>
      <Header />
      <Filter
        filterType={filterType}
        filterPrice={filterPrice}
        setFilterType={setFilterType}
        setFilterPrice={setFilterPrice}
      />
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
          <div className="flex flex-wrap gap-4 justify-between">
            {items.map((item) => (
              <CatalogCard
                key={item.id}
                item={item}
                filterType={filterType}
                filterPrice={filterPrice}
              />
            ))}
          </div>
        )}
      </section>
      <Footer />
    </>
  )
}

export default Catalog
