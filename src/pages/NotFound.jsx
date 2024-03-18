import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header/Header'

const NotFound = () => {
  return (
    <>
      <Header />
      <h1>Ошибка, скорее всего неправильный адрес</h1>
      <button>
        <Link to="/">Вернуться домой</Link>
      </button>
    </>
  )
}

export default NotFound
