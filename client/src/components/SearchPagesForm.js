import React from 'react'
import { Button } from 'react-bootstrap'

const SearchPagesForm = ({ loadBusinesses }) => {
  const handleSearch = (event) => {
    event.preventDefault()
    const page = parseInt(document.getElementById('pageSearch').value)
    const perPage = parseInt(document.getElementById("perPage").value)
    if (isNaN(page)|| page < 1) {
      alert('Please enter a number greater than 1')
    } else {
      loadBusinesses(`http://ec2-54-84-251-148.compute-1.amazonaws.com/businesses/?page=${page}&per_page=${perPage}`)
    }
  }

  return (
    <form onSubmit={handleSearch} className="page-search-form">
      <label>Page #</label>
      <input type="text" id="pageSearch" />
      <label>Results per page</label>
      <select id="perPage">
        <option value="50">50</option>
        <option value="25">25</option>
        <option value="10">10</option>
      </select>
      <Button type="submit" bsSize="small" bsStyle="primary">Submit</Button>
    </form>
  )
}

export default SearchPagesForm