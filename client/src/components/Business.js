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
    const { name, address, address2, city, state, country, zip, phone, website } = this.state.business
    
    if (this.state.business) {
      return (
        <div>
          <h3>{name}</h3>
          <div>{address} {address2}</div>
          <div>{city}, {state}, {country} {zip}</div>
          <div>{phone} - {website}</div>
        </div>
      )
    } else {
      return <div>loading</div>
    }
  }
}