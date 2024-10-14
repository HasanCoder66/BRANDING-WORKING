import React from 'react'
import EditHomePageHeader from '../components/EditHomePageHeader'
import EditProductsTable from '../components/EditProductsTable'
import EditContactUsTable from '../components/EditContactUsTable'


const EditContactUsPage = () => {
  return (
    <div>
        <EditHomePageHeader heading='Edit Contact Us Page'/>
        <EditContactUsTable/>
        

    </div>
  )
}

export default EditContactUsPage