import React from 'react'
import PatientDetails from '../components/PatientDetails'

const UpdatePatientDetail = () => {
    return (
        <div className="fixed inset-0 z-20 flex  bg-black bg-opacity-80 font-manrope ">
            <div className="flex flex-col m-[100px] w-full bg-white px-  ">

                <div className="flex text-white font-medium text-sixteen w-full bg-primary px-[30px] py-[24px]">
                    Update Patient
                </div>

                <PatientDetails/>


                <div className="flex justify-center gap-x-4">
                        <button className='bg-button-default p-3 text-white rounded-border mt-4' >Update</button>
                        <button className='bg-button-default p-3 text-white rounded-border mt-4' >Cancel</button>

                    </div>
            </div>

        </div>
    )
}

export default UpdatePatientDetail