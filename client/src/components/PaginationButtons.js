import React from 'react'

const PaginationButtons = ({ first, last, next, prev, loadBusinesses, currentPage }) => {
  const handleSearch = (event) => {
    event.preventDefault()
    const page = document.getElementById('pageSearch').value
    if (page > 1000 || page < 1 || typeof page !== 'number') {
      alert('Must be between 1 - 1000')
    } else {
      loadBusinesses(`http://ec2-54-84-251-148.compute-1.amazonaws.com/businesses/?page=${page}`)
    }
  }
  return (
    <div>
      {currentPage > 1 ? <button onClick={() => loadBusinesses(first)}>first</button> : <div></div>}
      {currentPage > 1 ? <button onClick={() => loadBusinesses(prev)}>prev</button> : <div></div>}
      {currentPage < 1000 ? <button onClick={() => loadBusinesses(next)}>next</button> : <div></div>}
      {currentPage < 1000 ? <button onClick={() => loadBusinesses(last)}>last</button> : <div></div>}
      <form onSubmit={handleSearch}>
        <input type="text" id="pageSearch" />
        <input type="submit" value="submit"/>
      </form>
    </div>
  )
}

export default PaginationButtons