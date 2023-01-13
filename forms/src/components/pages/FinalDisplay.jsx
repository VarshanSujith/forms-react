import React from 'react'
import { useState } from 'react'

const FinalDisplay = (formData,setFormData) => {
  console.log(formData.formData.type)
  const [val,setVal] =useState(2)
  if(formData.formData.type ==='personal'){
    console.log(val)
     setVal(val+1)
  }
  
    return (
        <div className='flex flex-col mt-12 gap-2 ml-6'>
    <p>Type: {formData.formData.type}</p>      
    <p>First Name: {formData.formData.firstName}</p>
    <p>Last Name: {formData.formData.lastName}</p>
    <p>Email: {formData.formData.email}</p>
    <p>Phone Number: {formData.formData.phoneNumber}</p>
    {val==1 && <p>Country: {formData.formData.country}</p>}
    {val==1 && <p>Currency: {formData.formData.currency}</p>}
    {val==1 && <p>Bank Format: {formData.formData.bank} </p>}
    {val==1 && <p>Account Number: {formData.formData.accountNumber}</p>}
    
    {val==2 && <p>Bank Format: {formData.formData.bankDetailsFormat}</p>}
    {val==2 && <p>ACH Routing Number: {formData.formData.achRoutingNumber}</p>}
    {val==2 && <p>Account Number: {formData.formData.accountNumber} </p>}
    {val==2 && <p>Account Type: {formData.formData.accountType}</p>}

    <p>Country: {formData.formData.countryAddress}</p>
    <p>Post Code: {formData.formData.postalCode}</p>
    <p>Address: {formData.formData.address}</p>
    </div>
  )
}

export default FinalDisplay