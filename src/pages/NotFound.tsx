import React from 'react'
import { Link } from 'react-router-dom'

const NotFound: React.FC = () => {
  return (
    <>
      <h1>Ошибка, скорее всего неправильный адрес</h1>
      <button>
        <Link to="/">Вернуться домой</Link>
      </button>
    </>
  )
}

export default NotFound
