import React, { Component } from 'react'
import BusinessListItem from './BusinessListItem'
import axios from 'axios'

export default class BusinessesList extends Component {
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
      console.log(res.data.businesses)
      this.setState({
        businesses: res.data.businesses,
        page: 1
      })
    })
    .catch(err => {
      console.log('Error getting businesses: ',err)
    })
  }

  loadMoreBusinesses () {
    //set a new page to get businesses from
    let newPage = this.state.page + 1

    axios.get(`http://ec2-54-84-251-148.compute-1.amazonaws.com/businesses?page=${newPage}`)
    .then(res => {

      //Concat the new businesses with the old ones
      let businesses = this.state.businesses.concat(res.data.businesses)

      //Set the updated list to state
      this.setState({
        businesses: businesses,
        page: newPage
      })
    })
    .catch(err => {
      console.log('Error getting businesses: ',err)
    })
  }

  render () {
    return (
      <div>
        {
          this.state.businesses.map((business, key) => (
            <BusinessListItem
              key={key}
              business={business}
            />
          ))
        }
        <button onClick={this.loadMoreBusinesses}>Load More</button>
      </div>
    )
  }
}