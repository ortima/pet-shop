import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header/Header'

const NotFound = () => {
  return (
    <>
      <Header />
      <button>
        <Link to="/">Вернуться домой</Link>
      </button>
    </>
  )
}

export default NotFound
