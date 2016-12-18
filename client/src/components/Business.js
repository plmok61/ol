import React, { Component } from 'react'
import axios from 'axios'

export default class Business extends Component {
  constructor (props) {
    super(props)
    this.state = {
      business: false
    }
  }

  componentDidMount () {
    axios.get(`http://ec2-54-84-251-148.compute-1.amazonaws.com/businesses/${this.props.params.id}`)
      .then(res => {
        this.setState({
          business: res.data
        })
        console.log(res.data)
      })
  }

  render () {
    const { name, address, address2, city, country, phone, state, website, zip } = this.state.business
    
    if (this.state.business) {
      return (
        <div>
          {name}
        </div>
      )
    } else {
      return <div>loading</div>
    }
  }
}