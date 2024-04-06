import { Link } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import { useContext, useState } from 'react'

import { AiTwotoneShopping } from 'react-icons/ai'
import { RxAvatar } from 'react-icons/rx'
import { IoIosSettings } from 'react-icons/io'
import { CiLock } from 'react-icons/ci'
import { VscSignIn } from 'react-icons/vsc'
import { UserAuth } from '../../context/AuthContext'
import { GiExitDoor } from 'react-icons/gi'
import toast, { Toaster } from 'react-hot-toast'

const PopUp = () => {
  const { user, logout } = UserAuth()
  return (
    <div className="absolute bg-slate-100 right-14 top-20 rounded-b-md border-x-2 border-b-2 border-black">
      <Toaster position="top-center" reverseOrder={false} />
      <ul className="p-5 flex flex-col gap-2">
        {user && (
          <li>
            <Link
              to="/account"
              className="flex items-center gap-2 hover:underline"
            >
              <IoIosSettings size={20} />
              Профиль
            </Link>
          </li>
        )}
        {!user && (
          <li>
            <Link
              to="/signup"
              className="flex items-center gap-2 hover:underline"
            >
              <VscSignIn size={20} />
              Регистрация
            </Link>
          </li>
        )}
        {!user && (
          <li>
            <Link
              to="/login"
              className="flex items-center gap-2 hover:underline"
            >
              <CiLock size={20} />
              Авторизация
            </Link>
          </li>
        )}
        {user && (
          <li
            className="flex items-center gap-2 hover:underline"
            onClick={() => {
              logout()
              toast.success('Вы вышли с аккаунта!')
            }}
          >
            <GiExitDoor size={20} />
            Выход
          </li>
        )}
      </ul>
    </div>
  )
}

const Header = () => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false)
  const { quantity } = useContext(AppContext)
  return (
    <header className="sticky top-0 z-10">
      <div className="w-full h-20 bg-white border-b-2 border-b-gray-800">
        <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
          <div>
            <h1>Тут будет лого</h1>
          </div>
          <div>
            <ul className="flex items-center gap-5">
              {' '}
              <li className="text-base text-black font-bold hover:text-orange-700 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                <Link to="/">Главная </Link>
              </li>
              <li className="text-base text-black font-bold hover:text-orange-700 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                <Link to="/catalog"> Каталог</Link>
              </li>
              <li className="text-base text-black font-bold hover:text-orange-700 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                <Link to="/blog"> Блог</Link>
              </li>
              <li className="text-base text-black font-bold hover:text-orange-700 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                <Link to="/contacts"> Контакты</Link>
              </li>
            </ul>
          </div>
          <div className="flex gap-3 items-center">
            <div className="cursor-pointer relative">
              <Link to="/cart">
                <AiTwotoneShopping size={30} />
                {quantity > 0 && (
                  <span className="absolute w-5 h-5 bottom-5 left-4  font-semibold flex items-center justify-center text-white text-xs bg-red-600 rounded-full">
                    {quantity}
                  </span>
                )}
              </Link>
            </div>{' '}
            <div
              className="cursor-pointer w-fit p-1 hover:bg-slate-300 rounded-full"
              onClick={() => setIsPopUpOpen(!isPopUpOpen)}
            >
              <div>
                <RxAvatar size={30} className="relative" />
                {isPopUpOpen && <PopUp />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
