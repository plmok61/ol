import React from 'react'

const BusinessesList = ({ businesses }) => (
  <div>
    {
      businesses.map((business, key) => (
        <div key={key}>
          {business.name}
        </div>
      ))
    }
  </div>
)

export default BusinessesList