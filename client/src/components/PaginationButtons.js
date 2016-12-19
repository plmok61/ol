import React from 'react'
import { Button } from 'react-bootstrap'

const PaginationButtons = ({ first, last, next, prev, loadBusinesses, currentPage }) => {
  const handleSearch = (event) => {
    event.preventDefault()
    const page = Number(document.getElementById('pageSearch').value)
    if (typeof page !== 'number') {
      alert('Must be between 1 - 1000')
    } else {
      loadBusinesses(`http://ec2-54-84-251-148.compute-1.amazonaws.com/businesses/?page=${page}`)
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
        {currentPage < 1000 ? 
          <Button 
            bsStyle="info" 
            bsSize="small" 
            className="pagination-btn" 
            onClick={() => loadBusinesses(next)}
          >
            next
          </Button> : 
          <Button bsStyle="info" bsSize="small" className="pagination-btn">-</Button>}
        {currentPage < 1000 ? 
          <Button 
            bsStyle="info" 
            bsSize="small" 
            className="pagination-btn" 
            onClick={() => loadBusinesses(last)}
          >last</Button> : 
          <Button bsStyle="info" bsSize="small" className="pagination-btn">-</Button>}
     
      <form onSubmit={handleSearch} className="page-search-form">
        <input type="text" id="pageSearch" />
        <input type="submit" value="submit"/>
      </form>
    </div>
  )
}

export default PaginationButtons