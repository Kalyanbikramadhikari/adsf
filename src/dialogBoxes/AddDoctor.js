
// Author: Kalyan Bikram Adhikari
// Created-Date: 2024/10/04
// Modified-Date: 


import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { usePatientRegisterMutation } from '../store/APIFeatures/PatientApi'
import { useAddDoctorMutation } from '../store/APIFeatures/DoctorApi'

const testRegisterData = {
    "email": "eve.holt@reqres.in",
    "password": "pistol"
}

const AddDoctor = ({ setShowAddDoctorDialogConfig }) => {

    const [addDoctor, { data: addDoctorData, isLoading, isSuccess }] = useAddDoctorMutation()

    const [doctorName, setDoctorName]= useState('')
    const [qualification, setQualification] = useState('')

    const handleCancelChange = () => {
        setShowAddDoctorDialogConfig(false);
    };
    const handleAddDoctor=()=>{
        addDoctor({doctorName, qualification})
        // setShowAddDoctorDialogConfig(false)

    }

    useEffect(()=>{
        if(isSuccess){
            toast.success('Doctor Added Sucessfully')
        }
    })
    return (
        <div className="fixed inset-0 z-30 flex  bg-black bg-opacity-10 font-manrope ">
            <div className="flex flex-col mx-[200px] my-[50px] w-full bg-white   ">
                <div className="flex text-white font-medium text-sixteen w-full bg-primary px-[30px] py-[24px]">
                    Add a Doctor
                </div>

                {/* <div className="grid grid-cols-1"> */}
                <div className="flex flex-col space-y-[24px] mt-5 px-10 ">
                    <div className="relative rounded-border border-border border-[1px] p-2 text-[14px]">
                        <span className='bg-white text-border absolute -top-3 px-2 text-[14px]' >Name</span>
                        <input type="email" className='w-full outline-none p-2' placeholder='John doe' onChange={(e)=>setDoctorName(e.target.value)}/>

                    </div>
                    <div className="relative rounded-border border-border border-[1px] p-2 text-[14px]">
                        <span className='bg-white text-border absolute -top-3 px-2  text-[14px]' >Qualification</span>
                        <input type="text" className='w-full outline-none p-2 ' placeholder='MD/MBBS' onChange={(e)=>setQualification(e.target.value)}/>

                    </div>

                </div>


                <div className="flex justify-end px-10">
                    <button className='bg-button-default p-3 text-white rounded-border mt-4' onClick={handleAddDoctor}>Add</button>
                    <button onClick={handleCancelChange} className=" text-primary-title border-2 border-primary-title font-poppins md:text-[14px] py-2 rounded px-8">
                        Cancel
                    </button>
                </div>


            </div>

        </div>
    )
}

export default AddDoctor