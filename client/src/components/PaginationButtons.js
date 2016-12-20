import React from 'react'
import { Button } from 'react-bootstrap'

const PaginationButtons = ({ first, last, next, prev, loadBusinesses, currentPage }) => {
  const handleSearch = (event) => {
    event.preventDefault()
    const page = parseInt(document.getElementById('pageSearch').value)
    const perPage = parseInt(document.getElementById("perPage").value)
    if (isNaN(page)|| page < 1) {
      alert('Must be a number greater than 1')
    } else {
      loadBusinesses(`http://ec2-54-84-251-148.compute-1.amazonaws.com/businesses/?page=${page}&per_page=${perPage}`)
    }
  }

  return (
    <div className="pagination-buttons">
        {currentPage > 1 ? 
          <Button 
            bsStyle="info" 
            bsSize="small" 
            className="pagination-btn" 
            onClick={() => loadBusinesses(first)}
          >
            first
          </Button> : 
          <Button bsStyle="info" bsSize="small" className="pagination-btn">-</Button>}
        {currentPage > 1 ? 
          <Button 
            bsStyle="info" 
            bsSize="small" 
            className="pagination-btn" 
            onClick={() => loadBusinesses(prev)}
          >
            prev
          </Button> : <Button bsStyle="info" bsSize="small" className="pagination-btn">-</Button>}
        <span className="current-page">{currentPage}</span>
        {next ? 
          <Button 
            bsStyle="info" 
            bsSize="small" 
            className="pagination-btn" 
            onClick={() => loadBusinesses(next)}
          >
            next
          </Button> : 
          <Button bsStyle="info" bsSize="small" className="pagination-btn">-</Button>}
        {last ? 
          <Button 
            bsStyle="info" 
            bsSize="small" 
            className="pagination-btn" 
            onClick={() => loadBusinesses(last)}
          >last</Button> : 
          <Button bsStyle="info" bsSize="small" className="pagination-btn">-</Button>}
     
      <form onSubmit={handleSearch} className="page-search-form">
        <input type="text" id="pageSearch" />
        <select id="perPage">
          <option value="50">50</option>
          <option value="25">25</option>
          <option value="10">10</option>
        </select>
        <input type="submit" value="submit"/>
      </form>
    </div>
  )
}

export default PaginationButtons