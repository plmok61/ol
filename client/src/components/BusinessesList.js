import React, { Component } from 'react'
import { Link } from 'react-router'
import BusinessListItem from './BusinessListItem'
import axios from 'axios'

export default class BusinessesList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      businesses: [],
      pages: null,
      currentPage: 1
    }
    this.loadBusinesses = this.loadBusinesses.bind(this)
  }

  componentDidMount () {
    this.loadBusinesses('http://ec2-54-84-251-148.compute-1.amazonaws.com/businesses/')
  }

  //Probably will get rid of this but saving for now.
  loadBusinessesByPage () {
    let page
    this.props.params.page !== undefined ? page = this.props.params.page : page = ''
    axios.get(`http://ec2-54-84-251-148.compute-1.amazonaws.com/businesses/?page=${page}`)
    .then(res => {
      console.log(res.data.pages)
      this.setState({
        businesses: res.data.businesses,
        pages: res.data.pages
      })
    })
    .catch(err => {
      console.log('Error getting businesses: ',err)
    })
  }

  loadBusinesses (url) {
    axios.get(url)
    .then(res => {
      console.log(res.data.pages)
      this.setState({
        businesses: res.data.businesses,
        pages: res.data.pages
      })
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
          <button onClick={() => this.loadBusinesses(prev)}>prev</button>
          <button onClick={() => this.loadBusinesses(next)}>next</button>
        </div>
      )
    } else {
      return <div>loading</div>
    }
  }
}