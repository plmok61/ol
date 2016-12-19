import React from 'react'

const PaginationButtons = ({ first, last, next, prev, loadBusinesses}) => {
  return (
    <div>
      <button onClick={() => loadBusinesses(first)}>first</button>
      <button onClick={() => loadBusinesses(prev)}>prev</button>
      <button onClick={() => loadBusinesses(next)}>next</button>
      <button onClick={() => loadBusinesses(last)}>last</button>
    </div>
  )
}

export default PaginationButtons