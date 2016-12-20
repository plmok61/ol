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
      })
  }

  render () {
    const { name, address, address2, city, state, country, zip, website } = this.state.business


    if (this.state.business) {
    //Make the phone number look pretty
    let phone = this.state.business.phone
    let areaCode = phone.slice(0, 3)
    let firstThree = phone.slice(3, 6)
    let lastFour = phone.slice(6)
    phone = `${areaCode}-${firstThree}-${lastFour}`
      return (
        <div className="business">
          <h3>{name}</h3>
          <div>{address} {address2}</div>
          <div>{city}, {state}, {country} {zip}</div>
          <div>phone: {phone}</div>
          <div><a href={website}>Website</a></div>
        </div>
      )
    } else {
      return <div>loading</div>
    }
  }
}