const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <ul className="flex justify-center gap-3">
      {pageNumbers.map((number) => (
        <li
          key={number}
          className="p-4 border-orange-500 rounded-lg border-2 cursor-pointer hover:bg-orange-500 hover:text-white"
          onClick={() => paginate(number)}
        >
          <div className="page-link">{number}</div>
        </li>
      ))}
    </ul>
  )
}

export default Pagination
