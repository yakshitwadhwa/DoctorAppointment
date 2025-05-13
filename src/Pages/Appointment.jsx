import React, { useContext, useEffect ,useState} from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../Context/AppContext';
import { assets } from '../assets/assets_frontend/assets';
import RelatedDoctors from './RelatedDoctors';

const Appointment = () => {
  const {docId}=useParams();
  const {doctors}= useContext(AppContext);

  const [docInfo ,setDocInfo]=useState(null);
  const[docSlots,setdocSlots] = useState([]);
  const[slotIndex,setslotIndex]=useState(0)
  const[slotTime,setSlotTime]=useState('')
const  fetchDocInfo= async () =>{
  const docInfo = doctors.find(doc => doc._id==docId)
  setDocInfo(docInfo)
  console.log(docInfo);
}
// available slots 
// const getavailableSlots= async ()=>{
//   setdocSlots([]);

//   //getting current date
//   let today = new Date()

//   for(let i=0;i<7;i++){
//     let currDate= new Date(today);
//     currDate.setDate(today.getDate()+i)
//   }

// let endTime = new Date();
// endTime.setDate(today.getDate()+1)
// endTime.setHours(21,0,0,0)

// // setting setHours   
// if(today.getDate()===currDate.getDate()){
//   currDate.setHours(currDate.getHours()>10?currDate.getHours()+1:10)
//   currDate.setMinutes(currDate.getMinutes()>30?30:0)
// }else{
//   currDate.setHours(10)
//   currDate.setMinutes(0)
// }

// let timeSlots=[]

// while(currDate<endTime){
//   let formattedTime
// }

// }
useEffect(()=>{
fetchDocInfo();
},[doctors,docId])

// useEffect(()=>{
//   getavailableSlots();
//   },[docId])



  return docInfo && (
    <div>
      {/* doctor details  */}
      <div className='flex flex-col sm:flex-row gap-4 text-black'>
        <div>
          <img src={docInfo.image} className='bg-primary w-full sm:max-w-72 rounded-lg' alt="" />
        </div>
        {/* doctor details  */}
        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
<p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
{docInfo.name} <img className='w-5' src={assets.verified_icon} alt="" />
</p>

<div className='flex item-center gap-2 text-sm mt-1 text-gray-600'>
  <p>{docInfo.degree} - {docInfo.speciality}  </p>
  <button className='py-0.5 px-2 border text-xs rounded-full'>{docInfo.experience}</button>
</div>
<div>
  <p className='flex items-centergap-1 text-sm font-medium text-gray-900 mt-3'>About <img src={assets.info_icon} alt="" /></p>
  <p className=' text-left text-sm text-gray-500 max-w-[700px] mt-1'>{docInfo.about}</p>
</div>
<p className='text-left'>Appoitnment fee : <span>${docInfo.fees}</span></p>
        </div>
      </div>
      {/* RelatedDoctors
       */}

       <RelatedDoctors docId={docId} speciality={docInfo.speciality}/>
    </div>
    // 2:26 
  )
}

export default Appointment
