const basename = import.meta.env.BASE_URL || '/'

const advantages = [
  {
    id: 1,
    src: `${basename}/advantages/bonus-program.svg`,
    title: 'Бонусная программа',
    description: 'Кэшбэк до 7% на бонусную карту',
  },
  {
    id: 2,
    src: `${basename}/advantages/delivery.svg`,
    title: 'Быстрая доставка',
    description: 'При оформлении заказа с 12:00 до 18:00',
  },
  {
    id: 3,
    src: `${basename}/advantages/app.svg`,
    title: 'Удобное приложение',
    description: 'Заказывайте через мобильное приложение',
  },
  {
    id: 4,
    src: `${basename}/advantages/grooming.svg`,
    title: 'Груминг салоны',
    description: 'Придадим форму вашему другу',
  },
  {
    id: 5,
    src: `${basename}/advantages/pickup.svg`,
    title: 'Самовывоз заказа',
    description: 'Через 30 мин из магазина',
  },
]
export default advantages
