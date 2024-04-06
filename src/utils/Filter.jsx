/* eslint-disable react/prop-types */
import React from 'react'

const Filter = ({ filterType, filterPrice, setFilterType, setFilterPrice }) => {
  return (
    <div className="flex justify-center gap-2">
      {filterType && (
        <div className="cursor-pointer" onClick={() => setFilterType(null)}>
          Фильтр по типу: {filterType}
        </div>
      )}
      {filterPrice && (
        <div className="cursor-pointer" onClick={() => setFilterPrice(null)}>
          Фильтр по цене до: {filterPrice}
        </div>
      )}
    </div>
  )
}

export default Filter
