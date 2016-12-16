import React, { Component } from 'react'
import axios from 'axios'

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

  render () {
    return (
      <div>Hello World!</div>
    )
  }
}