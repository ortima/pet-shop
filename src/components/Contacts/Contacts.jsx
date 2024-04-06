import { BsGeoAltFill, BsTelephone } from 'react-icons/bs'
import { IoIosMail } from 'react-icons/io'
import { IoShareSocialOutline } from 'react-icons/io5'
import { FaInstagram, FaPinterest } from 'react-icons/fa'
import ContactForm from './ContactForm'
import contact_font from '/font-contact.jpg'

const Contacts = () => {
  return (
    <div
      style={{ backgroundImage: `url(${contact_font})` }}
      className="bg-cover bg-no-repeat"
    >
      <section className="max-w-screen-lg mx-auto">
        <div className="my-4 bg-white">
          <h1 className="text-2xl text-center font-bold mb-3">Наши контакты</h1>
          <div className="flex flex-col gap-3 p-2 border-2 border-black rounded-md">
            <p>
              <span className="text-black font-semibold inline">
                Зоомагазин Природа{' '}
              </span>
              является интернет-магазином товаров для животных в Нальчике, в
              ассортимент которого входят как высококачественные корма, так и
              широкий выбор одежды, игрушек, аксессуаров и многого другого. Мы
              готовы общаться с клиентами 7 дней в неделю 24 часа в сутки.
            </p>
            <p>
              <span className="text-black font-semibold inline">
                Зоомагазин Природа{' '}
              </span>
              любит животных, практически у каждого из нас есть свои собаки,
              кошки, хомяки, кролики, морские свинки, шиншилы, хорьки, попугаи,
              рыбки...
            </p>
            <p>Мы готовы делиться опытом и интересными новостями.</p>
            <p>
              Мы всегда выполняем свои обязательства и рады сотрудничать с
              новыми партнерами.
            </p>
            <p>
              Мы хотим стать лучше, открыты к диалогу и ждем обратной связи от
              наших клиентов
            </p>
          </div>
        </div>
      </section>
      <section className="max-w-screen-lg mx-auto">
        <div className="block rounded-lg bg-[#292a2e]">
          <div className="flex flex-wrap items-center">
            <div className="block w-full shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
              <div className="h-[500px] w-full">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3A5d4aa8c0a6d6e122de45f7a372bde7aa6dacb3b67b20fc2889c91e5037f1d5fe&amp;source=constructor"
                  className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                  frameBorder="0"
                ></iframe>
              </div>
            </div>
            <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
              <div className="flex flex-wrap px-3 pt-12 pb-12 md:pb-0 lg:pt-0">
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:w-6/12 xl:px-12">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-white p-4 text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-6 grow">
                      <p className="mb-2 font-bold dark:text-white">Телефон</p>
                      <p className="text-neutral-500 dark:text-neutral-200">
                        +7 777-777-77
                      </p>
                      <p className="text-neutral-500 dark:text-neutral-200">
                        +1 234-567-89
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:w-6/12 xl:px-12">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-white p-4 text-primary">
                        <BsGeoAltFill className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-6 grow">
                      <p className="mb-2 font-bold dark:text-white">Адрес</p>
                      <p className="text-neutral-500 dark:text-neutral-200">
                        Кабардинская, 11
                      </p>
                      <p className="text-neutral-500 dark:text-neutral-200">
                        г. Нальчик
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:mb-0 xl:w-6/12 xl:px-12">
                  <div className="align-start flex">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-white p-4 text-primary">
                        <IoIosMail className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-6 grow">
                      <p className="mb-2 font-bold dark:text-white">E-mail</p>
                      <p className="text-neutral-500 dark:text-neutral-200">
                        zoo-priroda@mail.ru
                      </p>
                      <p className="text-neutral-500 dark:text-neutral-200">
                        account.net@mail.ru
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:w-6/12 xl:px-12">
                  <div className="align-start flex">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-white p-4 text-primary">
                        <IoShareSocialOutline
                          strokeWidth="2"
                          className="h-6 w-6"
                        />
                      </div>
                    </div>
                    <div className="ml-6 grow">
                      <p className="mb-2 font-bold dark:text-white">Ссылки</p>
                      <div className="text-white flex gap-2">
                        <FaInstagram className="h-6 w-6" />
                        <FaPinterest className="h-6 w-6" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-screen-lg mx-auto text-center">
        <ContactForm />
      </section>
    </div>
  )
}

export default Contacts
