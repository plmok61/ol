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
  }

  componentDidMount () {
    axios.get('http://ec2-54-84-251-148.compute-1.amazonaws.com/businesses')
    .then(res => {
      console.log(res)
      this.setState({
        businesses: res.data.businesses,
        page: 1
      })
    })
  }

  loadMoreBusinesses () {
    const newPage = this.state.page + 1
    axios.get(`http://ec2-54-84-251-148.compute-1.amazonaws.com/businesses?page=${newPage}`)
    .then(res => {
      const businesses = this.state.businesses

      businesses.concat(res.data.businesses)

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
      </div>
    )
  }
}