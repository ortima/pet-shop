// const basename = import.meta.env.BASE_URL || '/'

interface Categories {
  src?: string
  text: string
  url: string
}

const categories: Categories[] = [
  {
    src: `/category/category-1.jpg`,
    text: 'Еда для кошек',
    url: '/catalog?type=cat&category=foods',
  },
  {
    src: `/category/category-2.jpg`,
    text: 'Игрушки для кошек',
    url: '/catalog?type=cat&category=toys',
  },
  {
    src: `/category/category-3.jpg`,
    text: 'Еда для собак',
    url: '/catalog?type=dog&category=foods',
  },
  {
    src: `/category/category-4.jpg`,
    text: 'Игрушки для собак',
    url: '/catalog?type=dog&category=toys',
  },
  {
    src: `/category/category-5.jpg`,
    text: 'Рыбки',
    url: '/catalog?type=fish',
  },
]

export default categories
