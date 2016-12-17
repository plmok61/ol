import React from 'react'

const BusinessListItem = ({ business }) => {

  const viewBusiness = () => {
    window.location = `/#/businesses/${business.id}`
  } 

  return (
    <div onClick={viewBusiness}>
      {business.name}
    </div>
  )
}

export default BusinessListItem