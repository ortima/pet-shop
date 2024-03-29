const basename = import.meta.env.BASE_URL || '/'

const articles = [
  {
    src: `${basename}/articles/offer-banner-1.jpg`,
    title: 'Горячие летние дела ушастых друзей',
    subTitle: 'SELECTED ITEMS. ONLINE ONLY.',
    btnText: 'Читать!',
  },
  {
    src: `${basename}/articles/offer-banner-2.jpg`,
    title: 'Как побаловать свою любовь',
    subTitle: 'SELECTED ITEMS. ONLINE ONLY.',
    btnText: 'Читать!',
  },
  {
    src: `${basename}/articles/offer-banner-3.jpg`,
    title: 'Hot Summer Deals',
    subTitle: 'SELECTED ITEMS. ONLINE ONLY.',
    btnText: 'Read More',
  },
]

export default articles
