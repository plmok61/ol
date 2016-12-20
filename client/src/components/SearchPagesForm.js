import React from 'react'

const SearchPagesForm = ({ loadBusinesses }) => {
  const handleSearch = (event) => {
    event.preventDefault()
    const page = parseInt(document.getElementById('pageSearch').value)
    console.log(page)
    const perPage = parseInt(document.getElementById("perPage").value)
    if (isNaN(page)|| page < 1) {
      alert('Must be a number greater than 1')
    } else {
      loadBusinesses(`http://ec2-54-84-251-148.compute-1.amazonaws.com/businesses/?page=${page}&per_page=${perPage}`)
    }
  }

  return (
    <form onSubmit={handleSearch} className="page-search-form">
      <input type="text" id="pageSearch" />
      <select id="perPage">
        <option value="50">50</option>
        <option value="25">25</option>
        <option value="10">10</option>
      </select>
      <input type="submit" value="submit"/>
    </form>
  )
}

export default SearchPagesForm