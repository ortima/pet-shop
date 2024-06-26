// const basename = import.meta.env.BASE_URL || '/'
interface Advantages {
  id: number
  src?: string
  title: string
  description: string
}

const advantages: Advantages[] = [
  {
    id: 1,
    src: '/advantages/bonus-program.svg',
    title: 'Бонусная программа',
    description: 'Кэшбэк до 7% на бонусную карту',
  },
  {
    id: 2,
    src: '/advantages/delivery.svg',
    title: 'Быстрая доставка',
    description: 'При оформлении заказа с 12:00 до 18:00',
  },
  {
    id: 3,
    src: '/advantages/app.svg',
    title: 'Удобное приложение',
    description: 'Заказывайте через приложение',
  },
  {
    id: 4,
    src: '/advantages/grooming.svg',
    title: 'Груминг салоны',
    description: 'Придадим форму вашему другу',
  },
  {
    id: 5,
    src: '/advantages/pickup.svg',
    title: 'Самовывоз заказа',
    description: 'Через 30 мин из магазина',
  },
]
export default advantages
