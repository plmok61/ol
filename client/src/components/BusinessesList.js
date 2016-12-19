import React, { Component } from 'react'
import { Link } from 'react-router'
import axios from 'axios'

import BusinessListItem from './BusinessListItem'
import PaginationButtons from './PaginationButtons'

export default class BusinessesList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      businesses: [],
      pages: null,
      currentPage: null
    }
    this.loadBusinesses = this.loadBusinesses.bind(this)
  }

  componentDidMount () {
    //Set page number to 1 on initial load
    let pageNumber = this.props.params.page
    if (typeof pageNumber !== 'number') {
      pageNumber = 1
    }
    this.loadBusinesses(`http://ec2-54-84-251-148.compute-1.amazonaws.com/businesses/?page=${pageNumber}`)
  }

  loadBusinesses (url) {
    //Gets the page number from the url
    let pageNumber = url.replace(/^[^=]+=/,"")

    axios.get(url)
      .then(res => {
        console.log(res)
        this.setState({
          businesses: res.data.businesses,
          pages: res.data.pages,
          currentPage: pageNumber
        })
        window.location = `/#/pages/${pageNumber}`
      })
      .catch(err => {
        console.log('Error getting businesses: ',err)
      })
  }


  render () {
    if (this.state.businesses.length > 0) {

    const { first, last, next, prev } = this.state.pages

      return (
        <div className="list-container">
          {
            this.state.businesses.map((business,key) => (
              <BusinessListItem key={key} business={business}/>
            ))
          }
          <PaginationButtons
            first={first}
            last={last}
            next={next}
            prev={prev}
            loadBusinesses={this.loadBusinesses}
            currentPage={this.state.currentPage}
          />
        </div>
      )
    } else {
      return <div>loading</div>
    }
  }
}