import React from 'react'

function Address({formData , setFormData}) {

  const handleChange=(event)=>{
    setFormData({...formData,countryAddress:event.target.value})
  }
  function hasCity(city){return city.length>=3 ? 1:0}
  
  function hasPinCode(pCode)
  { const pc=(/^[1-8]{1}[0-9]{5}$/)
    return pc.test(Number(pCode))
    }
  function hasAddress(address){
    return address.length>=10 ? 1:0
  }

 if(!hasCity(formData.city)&& formData.city!==""){
    var cerr="Enter valid City"
 }
 if(!hasPinCode(formData.postalCode) && formData.postalCode!==""){
    var pperr="Invalid Post Code"
 }
 if(!hasAddress(formData.address) && formData.address!==""){
    var aerr="Enter Address"
 }

  return (
    <div className='flex flex-col gap-4 mt-12 bg-[#FFFFFF] m-1'>
        <select name="Country" id="" onChange={handleChange}>
            <option value="India">India</option>
            <option value="USA">U.S.A</option>
        </select>
        <input type="text" placeholder='City' onChange={(e)=>{setFormData({...formData,city:e.target.value})}} value={formData.city}></input>
        <p className='text-xs text-red-600'>{cerr}</p>
        <input type="text" placeholder='Post Code' onChange={(e)=>{setFormData({...formData,postalCode:e.target.value})}} value={formData.postalCode}></input>
        <p className='text-xs text-red-600'>{pperr}</p>
        <input type="text" placeholder='Address' onChange={(e)=>{setFormData({...formData,address:e.target.value})}} value={formData.address}></input>
        <p className='text-xs text-red-600'>{aerr}</p>
    </div>
  )
}

export default Address