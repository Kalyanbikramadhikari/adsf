import React, { useState } from 'react'

const PatientDetails = () => {
    const[patientName, setPatientName] = useState('')
    const[telNo, setTelNo] = useState('')
    const[age, setAge] = useState('')
    const[referredBy, setReferredBy] = useState('')
    const[sex, setSex] = useState('')
    const[labNo, setLabNo] = useState('')
    const[address, setAddress] = useState('')
    const[emailAddress, setEmailAddress] = useState('')
  return (
    <div>
        <div className="flex mt-8 px-[30px] ">

<div className="">
    <div className="flex text-sixteen font-medium">Basic Information</div>

    <div className="grid grid-cols-2 gap-x-12 gap-4">
        <div className="grid grid-cols-2  border-black ">
            <span className='font-manrope text-normal border-2 '>Patient name</span>
            <input type="text" className='border-[1px] border-border rounded-border outline-none' value={patientName} onChange={(e)=>setPatientName(e.target.value)}/>
        </div>
        <div className="grid grid-cols-2 ">
            <span className='font-manrope text-normal'>Tel No</span>
            <input type="number" className='border-[1px] border-border rounded-border outline-none' value={telNo} onChange={(e)=>setTelNo(e.target.value)} />
        </div>
        <div className="grid grid-cols-2 ">
            <span className='font-manrope text-normal'>Age</span>
            <input type="text" className='border-[1px] border-border rounded-border outline-none' value={age} onChange={(e)=>setAge(e.target.value)} />
        </div>
        <div className="grid grid-cols-2 ">
            <span className='font-manrope text-normal'>Referred by</span>
            <input type="text" className='border-[1px] border-border rounded-border outline-none' value={referredBy} onChange={(e)=>setReferredBy(e.target.value)} />
        </div>
        <div className="grid grid-cols-2 ">
            <span className='font-manrope text-normal'>sex</span>
            <div className="flex">
                <div className="flex">
                    <input type="radio" name='sex' className='border-[1px] border-border rounded-border outline-none' />
                    <span>Male</span>
                </div>

                <div className="flex">
                    <input type="radio" name='sex' className='border-[1px] border-border rounded-border outline-none' />
                    <span>Female</span>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-2 ">
            <span className='font-manrope text-normal'>Lab No</span>
            <input type="number" className='border-[1px] border-border rounded-border outline-none' value={labNo} onChange={(e)=>setLabNo(e.target.value)}/>
        </div>

        <div className="grid grid-cols-2 ">
            <span className='font-manrope text-normal'>Address</span>
            <input type="text" className='border-[1px] border-border rounded-border outline-none' value={address} onChange={(e)=>setAddress(e.target.value)} />
        </div>
        <div className="grid grid-cols-2 ">
            <span className='font-manrope text-normal'>Email Address</span>
            <input type="email" className='border-[1px] border-border rounded-border outline-none' value={emailAddress} onChange={(e)=>setEmailAddress(e.target.value)}/>
        </div>

    </div>


</div>

</div>
    </div>
  )
}

export default PatientDetails