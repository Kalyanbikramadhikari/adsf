import React, { useEffect } from 'react'
import { toast } from 'react-toastify'
import { usePatientRegisterMutation } from '../store/APIFeatures/PatientApi'

const testRegisterData = {
    "email": "eve.holt@reqres.in",
    "password": "pistol"
}

const PreviewDialog = ({data}) => {
    const [registerPatient, {data:registeredPatientData, isLoading, isSuccess}] = usePatientRegisterMutation

     
    const handleRegisterPatient = (e)=>{
        registerPatient(testRegisterData)


    }


    useEffect(()=>{
        if(isSuccess){
            toast.success('Patient Registeration Sucessfull')
        }
    },[isSuccess])
    return (
        <div className="fixed inset-0 z-30 flex  bg-black bg-opacity-10 font-manrope ">
            <div className="flex flex-col mx-[500px] my-[50px] w-full bg-white   ">
                <div className="flex text-white font-medium text-sixteen w-full bg-primary px-[30px] py-[24px]">
                    Patient's Detail Preview
                </div>

                {/* <div className="grid grid-cols-1"> */}
                <div className="flex flex-col   border-2 gap-2 px-20">
                    <div className="grid grid-cols-2 ">
                        <span>Patient's Name :</span>
                        <span>{data.patientName}</span>
                    </div>
                    <div className="grid grid-cols-2  ">
                        <span>Tel No :</span>
                        <span>{data.telNo}</span>
                    </div>
                    <div className="grid grid-cols-2  ">
                        <span>Age:</span>
                        <span>{data.age}</span>
                    </div>
                    <div className="grid grid-cols-2  ">
                        <span>Referred by :</span>
                        <span>Ram Prasad Sapkota</span>
                    </div>
                    <div className="grid grid-cols-2  ">
                        <span>Sex :</span>
                        <span>Male</span>
                    </div>
                    <div className="grid grid-cols-2  ">
                        <span>Lab No :</span>
                        <span>{data.labNo}</span>
                    </div>
                    <div className="grid grid-cols-2  ">
                        <span>Address :</span>
                        <span>{data.address}</span>
                    </div>
                    <div className="grid grid-cols-2  ">
                        <span>Email Address :</span>
                        <span>{data.emailAddress}</span>
                    </div>
                    <div className="grid grid-cols-2  ">
                        <span>Test Names :</span>
                        <div className="flex flex-col">
                        {data?.selectedTestsList && data.selectedTestsList.map((item,index)=>(
                            <span key={index}>{item}</span>
                        ))}
                        </div>
                    </div>
                </div>


                <div className="flex justify-end">
                <button className='bg-button-default p-3 text-white rounded-border mt-4' onClick={handleRegisterPatient}>Submit</button>

                </div>


            </div>

        </div>
    )
}

export default PreviewDialog