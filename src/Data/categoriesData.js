const basename = import.meta.env.BASE_URL || '/'

const categories = [
  { src: `${basename}/category/category-1.jpg`, text: 'Еда для кошек' },
  {
    src: `${basename}/category/category-2.jpg`,
    text: 'Игрушки для кошек',
  },
  { src: `${basename}/category/category-3.jpg`, text: 'Еда для собак' },
  {
    src: `${basename}/category/category-4.jpg`,
    text: 'Игрушки для собак',
  },
  { src: `${basename}/category/category-5.jpg`, text: 'Рыбки' },
]

export default categories
