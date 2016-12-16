import React from 'react'
import BusinessListItem from './BusinessListItem'

const BusinessesList = ({ businesses }) => (
  <div>
    {
      businesses.map((business, key) => (
        <BusinessListItem
          key={key}
          business={business}
        />
      ))
    }
  </div>
)

export default BusinessesList