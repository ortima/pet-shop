import { Link } from 'react-router-dom'
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'
import footerImg from '/footer/footer-bg.jpg'

const sections = [
  {
    title: 'Каталог',
    items: [
      { label: 'Корм', link: '/catalog?category=foods' },
      { label: 'Игрушки', link: '/catalog?category=toys' },
      { label: 'Аксессуары', link: '/catalog?category=accessories' },
    ],
  },
  {
    title: 'Категории',
    items: [
      { label: 'Корм для собак', link: '/catalog?type=dog&category=foods' },
      { label: 'Корм для кошек', link: '/catalog?type=cat&category=foods' },
      { label: 'Корм для рыбок', link: '/catalog?type=fish&category=foods' },
    ],
  },
  {
    title: 'Кабинет',
    items: [
      { label: 'О нас', link: '/contacts' },
      { label: 'Блог', link: '/blog' },
      { label: 'Авторизация', link: '/login' },
    ],
  },
]

const SocialLinks = [
  {
    name: 'GitHub',
    icon: FaGithub,
    link: '#',
  },
  {
    name: 'Facebook',
    icon: FaFacebook,
    link: '#',
  },
  {
    name: 'Inst',
    icon: FaInstagram,
    link: '#',
  },
  {
    name: 'Twitter',
    icon: FaTwitter,
    link: '#',
  },
]
const Footer = () => {
  return (
    <>
      <footer
        style={{
          backgroundImage: `url(${footerImg})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
        className="w-full mt-24 text-white pt-2"
      >
        <div className="max-w-screen-xl mx-auto mt-24 grid grid-cols-2 md:grid-cols-5 border-b-2 border-gray-600 py-8">
          {sections.map((section, index) => (
            <div key={index}>
              <h6 className="font-bold uppercase pt-2">{section.title}</h6>
              <ul>
                {section.items.map((item, i) => (
                  <li
                    key={i}
                    className="py-1 text-gray-500 hover:text-white cursor-pointer "
                  >
                    <Link to={item.link}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="col-span-2 pt-8 md:pt-2">
            <p className="font-bold uppercase">
              Подпишись на рассылку новостей
            </p>
            <p className="py-4">Следи за новостями и акциями</p>
            <form className="flex flex-col">
              <input
                type="email"
                placeholder="Ваша почта"
                className="w-full p-2 mr-4 rounded-md mb-4 text-black"
              />
              <button className="p-2 mb-4">Подписаться</button>
            </form>
          </div>
        </div>
        <div className="flex flex-col max-w-[1240px] px-2 pt-3 mx-auto justify-between sm:flex-row text-center text-gray-500">
          <p className="py-4">2024 Зоомагазин «Природа». Все права защищены.</p>

          <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
            {SocialLinks.map((x, index) => {
              return (
                <x.icon
                  key={index}
                  className="hover:text-white cursor-pointer"
                />
              )
            })}
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
