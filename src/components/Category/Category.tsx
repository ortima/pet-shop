import categories from '../../Data/categoriesData'
import { Link } from 'react-router-dom'
import React from 'react'

const Category = () => {
  return (
    <section className="font-semibold text-center">
      <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
        <h2 className="font-bold text-3xl sm:text-4xl md:text-[30px] text-dark mb-4">
          <span className="text-primary">Топовые</span> категории
        </h2>
      </div>
      <div className="mt-[30px]">
        <ul className="flex justify-between items-center mt-[30px]">
          {categories.map((category, index) => (
            <div key={index}>
              <Link
                to={category.url}
                className="flex flex-col items-center justify-center overflow-hidden transition-all duration-500 ease-in gap-7"
              >
                <img
                  className="h-[250px] w-[250px] hover:scale-110 transition-all duration-500 ease-in"
                  src={category.src}
                  alt={category.text}
                />
                <p className="hover:text-orange-500">{category.text}</p>
              </Link>
            </div>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Category
