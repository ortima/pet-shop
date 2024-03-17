const basename = import.meta.env.BASE_URL || '/' // Используйте значение BASE_URL из import.meta.env или по умолчанию '/'

const categories = [
  { src: `${basename}/category/category-1.jpg`, text: 'Еда для кошек' },
  {
    src: '/category/category-2.jpg',
    text: 'Игрушки для кошек',
  },
  { src: '/category/category-3.jpg', text: 'Еда для собак' },
  {
    src: '/category/category-4.jpg',
    text: 'Игрушки для собак',
  },
  { src: '/category/category-5.jpg', text: 'Рыбки' },
]

export default categories
