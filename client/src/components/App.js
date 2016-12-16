import React, { Component } from 'react'
import axios from 'axios'

import BusinessesList from './BusinessesList'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      businesses: [],
      page: null
    }
    this.loadMoreBusinesses = this.loadMoreBusinesses.bind(this)
  }

  componentDidMount () {
    axios.get('http://ec2-54-84-251-148.compute-1.amazonaws.com/businesses')
    .then(res => {
      this.setState({
        businesses: res.data.businesses,
        page: 1
      })
    })
  }

  loadMoreBusinesses () {
    //set a new page to get bussinesses from
    let newPage = this.state.page + 1

    axios.get(`http://ec2-54-84-251-148.compute-1.amazonaws.com/businesses?page=${newPage}`)
    .then(res => {

      //Concat the new bussinesses with the old ones
      let businesses = this.state.businesses.concat(res.data.businesses)

      //Set the updated list to state
      this.setState({
        businesses: businesses,
        page: newPage
      })
    })
  }

  render () {
    return (
      <div>Hello World!
        <BusinessesList businesses={this.state.businesses} />
        <button onClick={this.loadMoreBusinesses}>Load More</button>
      </div>
    )
  }
}