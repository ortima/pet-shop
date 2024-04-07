/* eslint-disable react/prop-types */
import React from 'react'

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <ul className="flex justify-center">
      {pageNumbers.map((number) => (
        <li key={number} className="p-4 border-indigo-500 border-2">
          <button onClick={() => paginate(number)} className="page-link">
            {number}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default Pagination
