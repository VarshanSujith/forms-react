import React from 'react'

function hasName(str){
  return(str.length>=6 ? 1: 0)
}
function hasEmail(email){
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
function hasPhoneNumber(numb){
  const num=(/^[6-9]{1}[0-9]{9}$/)
  return num.test(Number(numb))
}

const Beneficiary = ({
  setFormData,
  formData

}) => {
 console.log(formData)
 if(!hasName(formData.firstName)&&formData.firstName !=="" ){
  var ferr="Minimum 6 Characters Required"
}
if(!hasName(formData.lastName)&&formData.lastName !==""){
  var lerr="Minimum 6 Characters Required"
}
if(!hasEmail(formData.email)&&formData.email !==""){
  var eerr="Please enter a valid Email"
}
if(!hasPhoneNumber(formData.phoneNumber)&&formData.phoneNumber !==""){
  var perr="Please enter the valid number"
}

  return (
    <form>
        <div className="flex justify-center mt-12 m-1">
        <div className='flex flex-col items-center gap-4 w-full bg-[#FFFFFF]'>
        <input type="text" placeholder='First Name'  className='w-4/5 border-[#a4a4a4] mt-2'formData={formData} onChange={(e)=>{setFormData({...formData,firstName:e.target.value})}} value={formData.firstName}></input>
        <p className='text-xs text-red-600'>{ferr}</p>
        <input type="text" placeholder='Last Name'  className='w-4/5 border-[#a4a4a4]' formData={formData} onChange={(e)=>{setFormData({...formData,lastName:e.target.value})}} value={formData.lastName}></input>
        <p className='text-xs text-red-600'>{lerr}</p>
        <input type="text" placeholder='Email'  className='w-4/5 border-[#a4a4a4] ' formData={formData} onChange={(e)=>{setFormData({...formData,email:e.target.value})}} value={formData.email}></input>
        <p className='text-xs text-red-600'>{eerr}</p>
        <input type="text" placeholder='Phone Number'  className='w-4/5 border-[#a4a4a4] ' formData={formData} onChange={(e)=>{setFormData({...formData,phoneNumber:e.target.value})}} value={formData.phoneNumber}></input>
        <p className='text-xs text-red-600'>{perr}</p>
        </div>
        </div>
        </form>
  )
}

export default Beneficiary