import React from 'react'
import { Button } from 'react-bootstrap'

const PaginationButtons = ({ first, last, next, prev, loadBusinesses, currentPage }) => {

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
    </div>
  )
}

export default PaginationButtons