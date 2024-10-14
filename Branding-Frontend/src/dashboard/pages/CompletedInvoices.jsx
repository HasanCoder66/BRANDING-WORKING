import React from 'react'
import CompletedInvoicesTable from '../components/CompletedInvoicesTable'
import CompletedInvoicesHeader from '../components/CompletedInvoicesHeader'

function CompletedInvoices() {
  return (
<div>
<CompletedInvoicesHeader/>
<CompletedInvoicesTable/>
</div>
  )
}

export default CompletedInvoices