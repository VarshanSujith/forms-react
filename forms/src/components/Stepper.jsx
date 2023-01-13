import React from 'react'

const Stepper = ({clear}) => {
 
    return (
    <div className='mx-4 p-4 flex justify-between items-center'>
     <div className='w-full flex items-center gap-2 text-slate-300 justify-around'>
         {clear==0 && <div className='relative flex flex-col items-center text-white'>
          <div className='rounded-full border-2 border-[#3F51B5] w-8 h-8 flex items-center justify-center bg-[#3F51B5] py-3'>1</div>
          <div className='absolute top-0 text-center text-[#3F51B5] mt-12 text-xs font-medium' >
            Beneficiary</div>
         </div>}

         {clear >0 && <div className='relative flex flex-col items-center text-white'>
          <div className='rounded-full border-2 border-[#3F51B5] w-8 h-8 flex items-center justify-center bg-[#3F51B5] py-3'><i className='fa-solid fa-check'></i></div>
          <div className='absolute top-0 text-center text-[#3F51B5] mt-12 text-xs font-medium' >
            Beneficiary</div>
         </div>}

         <div className='flex-auto border-t-2 border-slate-300'> </div>

         {clear <1 && <div className='relative flex flex-col items-center text-[#9E9E9E]'>
            <div className='rounded-full border-2 border-slate-300 w-8 h-8 flex items-center justify-center bg-[#7F7F7F] py-3'>2</div>
            <div className='absolute top-0 text-center text-[#9E9E9E] mt-12 text-xs font-medium' >
            Bank Details</div>
         </div>}

         {clear ==1 && <div className='relative flex flex-col items-center text-white'>
            <div className='rounded-full border-2 border-slate-300 w-8 h-8 flex items-center justify-center bg-[#3F51B5] py-3'>2</div>
            <div className='absolute top-0 text-center text-[#3F51B5] mt-12 text-xs font-medium' >
            Bank Details</div>
         </div>}

         {clear > 1 && <div className='relative flex flex-col items-center text-white'>
            <div className='rounded-full border-2 border-[#3F51B5] w-8 h-8 flex items-center justify-center bg-[#3F51B5] py-3'><i className="fas fa-check"></i></div>
            <div className='absolute top-0 text-center text-[#3F51B5] mt-12 text-xs font-medium' >
            Bank Details</div>
         </div>}

         <div className='flex-auto border-t-2 border-slate-300'> </div>

         {clear <2 && <div className='relative flex flex-col items-center text-[#9E9E9E]'>
            <div className='rounded-full border-2 border-slate-300 w-8 h-8 flex items-center justify-center bg-[#7F7F7F] py-3'>3</div>
            <div className='absolute top-0 text-center text-[#9E9E9E] mt-12 text-xs font-medium' >
            Address</div>
         </div>}

         {clear ==   2 && <div className='relative flex flex-col items-center text-white'>
            <div className='rounded-full border-2 border-slate-300 w-8 h-8 flex items-center justify-center bg-[#3F51B5] py-3'>3</div>
            <div className='absolute top-0 text-center text-[#3F51B5] mt-12 text-xs font-medium' >
            Address</div>
         </div>} 

         {clear >2 && <div className='relative flex flex-col items-center text-white'>
            <div className='rounded-full border-2 border-[#3F51B5] w-8 h-8 flex items-center justify-center bg-[#3F51B5] py-3'><i className="fas fa-check"></i></div>
            <div className='absolute top-0 text-center text-[#3F51B5] mt-12 text-xs font-medium' >
            Address</div>
         </div>}
      </div>      
    </div>
  )
}

export default Stepper





