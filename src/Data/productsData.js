const basename = import.meta.env.BASE_URL || '/'

const products = [
  {
    id: 1,
    imageSrc: `${basename}/products/product-1.jpg`,
    hoverImageSrc: `${basename}/products/product-1_0.jpg`,
    price: 300,
    name: 'Товар 1',
  },
  {
    id: 2,
    imageSrc: `${basename}/products/product-2.jpg`,
    hoverImageSrc: `${basename}/products/product-2_0.jpg`,
    price: 300,
    name: 'Товар 2',
  },
  {
    id: 3,
    imageSrc: `${basename}/products/product-3.jpg`,
    hoverImageSrc: `${basename}/products/product-3_0.jpg`,
    price: 300,
    name: 'Товар 3',
  },
  {
    id: 4,
    imageSrc: `${basename}/products/product-4.jpg`,
    hoverImageSrc: `${basename}/products/product-4_0.jpg`,
    price: 500,
    name: 'Товар 4',
  },
  {
    id: 5,
    imageSrc: `${basename}/products/product-5.jpg`,
    hoverImageSrc: `${basename}/products/product-5_0.jpg`,
    price: 500,
    name: 'Товар 5',
  },
  {
    id: 6,
    imageSrc: `${basename}/products/product-6.jpg`,
    hoverImageSrc: `${basename}/products/product-6_0.jpg`,
    price: 600,
    name: 'Товар 6',
  },
  {
    id: 7,
    imageSrc: `${basename}/products/product-7.jpg`,
    hoverImageSrc: `${basename}/products/product-7_0.jpg`,
    price: 400,
    name: 'Товар 7',
  },
  {
    id: 8,
    imageSrc: `${basename}/products/product-8.jpg`,
    hoverImageSrc: `${basename}/products/product-8_0.jpg`,
    price: 300,
    name: 'Товар 8',
  },
]

export default products
