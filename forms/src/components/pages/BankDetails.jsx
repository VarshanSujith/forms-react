import React from 'react';
import { useState } from 'react';

const BankDetails = ({formData, setFormData}) => {
  const currency="Indian Rupee (INR)"; 
  const bank="INDIAN local";
  const [arrVal ,setArrVal]=useState(0)
  const [rcheck,setrCheck]=useState(0)

  const handleChange=(event)=>{
    setArrVal(event.target.value)
    console.log(arrVal)
    setFormData({...formData,country:event.country})
    setFormData({...formData,currency:currency})
    setFormData({...formData,bank:bank})
  }
  console.log(formData);
  const handleRadio = (e)=>{
      e.target.checked=true;
      setFormData({...formData,localBank:e.target.value})

  }
  const changeValue =(e)=>{
    setFormData({...formData,bankDetailsFormat:e.target.value})
  }
  const changeValued =(e)=>{
    setFormData({...formData,accountType:e.target.value})
  }
  function hasAccountNumber(accNum){
    var acnum=(/^\d{9,18}$/)
    return acnum.test(accNum)
  }
  function hasIfscCode(ifsc){
    var ifscc=(/^[A-Z]{4}0[A-Z0-9]{6}$/)
    return ifscc.test(ifsc)
  }
  function hasAchRouting(ach){
    var achr=(/^\d{9,11}$/)
    return achr.test(ach)
  }
  if (!hasIfscCode(formData.ifscCode) && formData.ifscCode !==""){
    var ifsce="Invalid IFSC Code"
  }

  if (!hasAccountNumber(formData.accountNumber) && formData.accountNumber !==""){
    var accerr="Invalid Account Number"
  }
  if(!hasAchRouting(formData.achRoutingNumber)&& formData.achRoutingNumber!==""){
    var acherr="Invalid ACH Routing Number"
  }


  return (
      <form>
      <div className='flex justify-center mt-12 m-1'>
      <div className='flex flex-col gap-4 w-full items-start bg-[#FFFFFF]'>
          <label>Country</label>
          <select value={arrVal} onChange={handleChange}  id="Country" className="w-full"                                                                          >
              <option value={0}>India</option>
              <option value={1}>U.S.A</option>                                          
          </select>
        {arrVal==0 && (<div className='w-full'>  
                        <div className='field flex flex-col items-start'>
                        <label className='left-0'>Currency</label>
                        <p className='text-[#7F7F7F]'>{currency}</p>
                        </div>
                        <div className='field flex flex-col items-start'>
                        <label className='left-0'>Bank Details Format</label>
                        <p className='text-[#7F7F7F]'>{bank}</p>
                        </div>
        <div className='field flex flex-col items-start w-full'>
        <label className='left-0 w-full'>IFSC code</label>
        <input type="text" className='border-[#a4a4a4] w-full' placeholder='IFSC code ' onChange={(e)=>{setFormData({...formData,ifscCode:e.target.value})}} value={formData.ifscCode}></input>
        <p className='text-xs text-red-600'>{ifsce}</p>
        </div>
        <div className='field flex flex-col items-start mb-4 w-full'>
        <label className='left-0 w-full'>Account Number</label>
        <input type="text" className='border-[#a4a4a4] w-full' placeholder='Account Number ' onChange={(e)=>{setFormData({...formData,accountNumber:e.target.value})}} value={formData.accountNumber}></input>
        <p className='text-xs text-red-600'>{accerr}</p>
        </div>
        </div>)}

        {arrVal==1 &&  (<div className="flex flex-col gap-4 m-1">
          <div className=" flex flex-col" onChange={changeValue} >
            <label>Bank Details Format</label>
            <label htmlFor="">
          <input type="radio" name='radio' value="Local bank details"  onChange={handleRadio}></input>
          Local bank details
          </label>
          <label htmlFor="">
          <input type="radio" name='radio' value="SWIFT code"  onChange={handleRadio}></input>
          SWIFT code
          </label>
          </div>
          <div className='field flex flex-col items-start w-full'>
          <label htmlFor="">ACH Routing Number</label>
          <input type="text" placeholder='ACH routing number' onChange={(e)=>{setFormData({...formData,achRoutingNumber:e.target.value})}} value={formData.achRoutingNumber}></input>
          <p className='text-xs text-red-600'>{acherr}</p>
          </div>
          <div className='field flex flex-col items-start w-full'>
          <label htmlFor="">Account Number</label>
          <input type="text" placeholder='Account Number' onChange={(e)=>{setFormData({...formData,accountNumber:e.target.value})}} value={formData.accountNumber}></input>
          <p className='text-xs text-red-600'>{accerr}</p>
          </div>
          <div className='field flex flex-col items-start w-full' onChange={changeValued}>
          <label htmlFor="">Account Type</label> 
          <select name="" id="">
              <option value="Checking Account">Checking Account</option>
              <option value="Current Account">Current Account</option>
              <option value="Savings Account">Savings Account</option>
          </select>
          </div>
        </div>)}

        
        
      </div>
      </div>
      </form>

    );
}

export default BankDetails;
