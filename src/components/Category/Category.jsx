import categories from '../../Data/categoriesData'
import { Link } from 'react-router-dom'

const Category = () => {
  return (
    <section className="font-semibold text-center">
      <h1 className="text-2xl">
        <span>Топовые</span> категории
      </h1>
      <div className="mt-[30px]">
        <ul className="flex justify-between items-center mt-[30px]">
          {categories.map((category, index) => (
            <div key={index} className="">
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
