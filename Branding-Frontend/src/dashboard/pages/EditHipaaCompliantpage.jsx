import React from 'react'
import EditHomePageHeader from '../components/EditHomePageHeader'
import EditProductsTable from '../components/EditProductsTable'
import EditContactUsTable from '../components/EditContactUsTable'
import EditHipaaCompliantpageTable from '../components/EditHipaaCompliantpageTable'


const EditHipaaCompliantpage = () => {
  return (
    <div>
        <EditHomePageHeader heading='Edit HIPAA Compliant Page'/>
       <EditHipaaCompliantpageTable/>
        

    </div>
  )
}

export default EditHipaaCompliantpage