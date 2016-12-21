import React, { Component } from 'react'
import axios from 'axios'
import { Grid, Row, Col } from 'react-bootstrap'

import BusinessListItem from './BusinessListItem'
import PaginationButtons from './PaginationButtons'
import SearchPagesForm from './SearchPagesForm'

export default class BusinessesList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      businesses: false,
      pages: null,
      currentPage: null,
      perPage: 50
    }
    this.loadBusinesses = this.loadBusinesses.bind(this)
  }

  componentDidMount () {
    //Set page number to 1 on initial load
    let pageNumber = parseInt(this.props.params.page)
    if (isNaN(pageNumber)) {
      pageNumber = 1
    }
    this.loadBusinesses(`http://ec2-54-84-251-148.compute-1.amazonaws.com/businesses/?page=${pageNumber}&per_page=${this.state.perPage}`)
  }

  loadBusinesses (url) {

    //Get the per page and page numer from the url
    const queries = url.split('?')[1].split('&')
    let pageNumber, perPage

    for (let i = 0; i <queries.length; i++) {
      if (queries[i].slice(0, 9) === 'per_page=') {
        perPage = queries[i]
      }
      if (queries[i].slice(0, 5) === 'page=') {
        pageNumber = queries[i]
      }
    }

    pageNumber = parseInt(pageNumber.slice(5))
    perPage = parseInt(perPage.slice(9))

    axios.get(url)
      .then(res => {
        this.setState({
          businesses: res.data.businesses,
          pages: res.data.pages,
          currentPage: pageNumber,
          perPage: perPage
        })
        window.location = `/#/pages/${pageNumber}`
      })
      .catch(err => {
        console.log('Error getting businesses: ',err)
      })
  }


  render () {
    if (this.state.businesses && this.state.businesses.length > 0) {

    //urls of the pages object
    const { first, last, next, prev } = this.state.pages

      return (
        <Grid>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12}>
              <div>
                <Row>
                  <Col xs={12} sm={6} md={6} lg={6}>
                    <PaginationButtons
                      first={first}
                      last={last}
                      next={next}
                      prev={prev}
                      loadBusinesses={this.loadBusinesses}
                      currentPage={this.state.currentPage}
                    />
                  </Col>
                  <Col xs={12} sm={6} md={6} lg={6}>
                    <SearchPagesForm loadBusinesses={this.loadBusinesses} />
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} sm={12} md={12} lg={12}>
                    <div className="business-list">
                    {
                      this.state.businesses.map((business,key) => (
                        <BusinessListItem key={key} business={business}/>
                      ))
                    }
                    </div>
                  </Col> 
                </Row>
                <Row>
                  <Col xs={12} sm={12} md={12} lg={12}>
                    <PaginationButtons
                      first={first}
                      last={last}
                      next={next}
                      prev={prev}
                      loadBusinesses={this.loadBusinesses}
                      currentPage={this.state.currentPage}
                    />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Grid>
      )
    } else if (this.state.businesses.length === 0) {
      return <div>No more businesses</div>
    } else {
      return <div>loading</div>
    }
  }
}