import React from 'react'
import EditHomePageHeader from '../components/EditHomePageHeader'
import EditProductsTable from '../components/EditProductsTable'


const EditProductsPage = () => {
  return (
    <div>
        <EditHomePageHeader heading='Edit Products Page'/>
        <EditProductsTable/>

    </div>
  )
}

export default EditProductsPage