import './App.css';
import Beneficiary from './components/pages/Beneficiary';
import BankDetails from './components/pages/BankDetails';
import Address from './components/pages/Address';
import Stepper from './components/Stepper';
import { useState } from 'react';
// import BusinessForm from './components/pages/BusinessForm';
import FinalDisplay from './components/pages/FinalDisplay';

function App() {
  const [formData, setFormData] = useState({
    type:"",
    firstName:"",
    lastName:"",
    email:"",
    phoneNumber:"",
    country:"",
    currency:"",
    bank:"",
    localBank:"",
    ifscCode:"",
    accountNumber:"",
    achRoutingNumber:"",
    bankDetailsFormat:"",
    accountType:"",
    countryAddress:"",
    city:"",
    postalCode:"",
    address:""
  })
  const [clear, setClear]=useState(0)
  const [page,setPage]=useState(1)
//  const [visible, setVisibility]=useState(1)
  const prevPage=()=>{
    setClear(clear-1)
    page > 1 ? setPage(page-1) : setPage(page)
  }
  const nextPage=()=>{
    setClear(clear+1)
    page>=1 && page<=4 ? setPage(page+1): setPage(page) 
  }
  // const clickPersonal=()=>{
  //   // visible > 1 ? setVisibility(visible-1) : setVisibility(visible)
  //   formData.type="Personal"
  //   // console.log("Personal Page",visible)
  // }
  // const clickBusiness=()=>{
  //   // visible <=1 ? setVisibility(visible+1) : setVisibility(visible)
  //   formData.type="Business"
  //   // console.log("Business Page",visible)
  // }
  const personal=()=>{
    formData.type="Personal"
    document.getElementById('personal').style.borderColor("#3F51B5")
  }

  const business=()=>{
    formData.type="Business"
    document.getElementById('business').style.borderColor("#3F51B5")
  }


  return (
    <div className="w-full md:w-1/3 mx-auto pb-2 bg-[#FFFFFF]">
      <div className='container horizontal mt-5'>
      <Stepper clear={clear}/>
      {/* <BankDetails/> */}
      {page===1 && <div className='flex flex-row gap-2 mt-10 m-2 justify-around'>
      <button className='bg-grey-200 text-lg border-b-2 border-gray-400  w-1/2 active:border-blue-700' id='personal' onClick={personal}>Personal</button>
      <button className='bg-grey-200 text-lg border-b-2 border-gray-400  w-1/2 active:border-blue-700' id='business' onClick={business}>Business</button>
      </div>}
      {page===1 && <Beneficiary formData={formData} setFormData={setFormData}/>}
      {page===2  && <BankDetails formData={formData} setFormData={setFormData}/>}

      {page===3 && <Address formData={formData} setFormData={setFormData}/>}
      {page===4 && <FinalDisplay formData={formData} setFormData={setFormData} />}
      </div>
      <div className='flex justify-start mt-6 ml-6 gap-4'>
      {page > 1 && <button className='bg-[#FFFFFF] text-[#3F51B5] border-[1px] px-6 py-1 ml-12 rounded-sm font-semibold border-[#ABB2DE] hover:text-blue-800' onClick={prevPage}>Previous</button>}  
      {(page >=1 && page<3) && <button className='bg-[#3F51B5] text-[#FFFFFF] px-6 py-1 ml-12 border-[1px] rounded-sm border-[#ABB2DE] font-semibold hover:bg-blue-700' onClick={nextPage}>Next</button>}    
      {(page >2 && page <=3) && <button className='bg-[#3F51B5] text-[#FFFFFF] px-6 py-1 ml-12 border-[1px] rounded-sm border-[#ABB2DE] font-semibold hover:bg-blue-700'onClick={nextPage}>Submit</button>}  
      </div>
    </div>
  );
}

export default App;
