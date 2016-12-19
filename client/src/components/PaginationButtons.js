import React from 'react'

const PaginationButtons = ({ first, last, next, prev, loadBusinesses, currentPage }) => {
  return (
    <div>
      <button onClick={() => loadBusinesses(first)}>first</button>
      {currentPage > 1 ? <button onClick={() => loadBusinesses(prev)}>prev</button> : <div></div>}
      {currentPage < 1000 ? <button onClick={() => loadBusinesses(next)}>next</button> : <div></div>}
      <button onClick={() => loadBusinesses(last)}>last</button>
    </div>
  )
}

export default PaginationButtons