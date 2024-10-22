import React, { useState } from 'react'


// mui icons
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PreviewDialog from './PreviewDialog';

const AddPatients = () => {
    const[patientName, setPatientName] = useState('')
    const[telNo, setTelNo] = useState('')
    const[age, setAge] = useState('')
    const[referredBy, setReferredBy] = useState('')
    const[sex, setSex] = useState('')
    const[labNo, setLabNo] = useState('')
    const[address, setAddress] = useState('')
    const[emailAddress, setEmailAddress] = useState('')
    const[patientData, setPatientData] =useState({})
    // const[labNo, setLabNo] = useState('')
    

    const [newList, setNewList] = useState('')
    const [selectedTest, setSelectedTest] = useState(null); // To track the selected test
    const [selectedTestsList, setSelectedTestsList] = useState([]);

    const[showPreviewDialog, setShowPreviewDialog] = useState(false)
    console.log('selectedTest', selectedTest)
    console.log('selectedTestsList', selectedTestsList)
    const bodyTests = [
        "Complete Blood Count (CBC)",
        "Lipid Profile",
        "Blood Glucose Test",
        "Thyroid Function Test (TFT)",
        "Liver Function Test (LFT)",
        "Kidney Function Test",
        "Electrolyte Panel",
        "Urinalysis",
        "Urine Culture",
        "Microalbumin Test",
        "Complete Blood Count (CBC)",
        "Lipid Profile",
        "Blood Glucose Test",
        "Thyroid Function Test (TFT)",
        "Liver Function Test (LFT)",
        "Kidney Function Test",
        "Electrolyte Panel",
        "Urinalysis",
        "Urine Culture",
        "Microalbumin Test"
    ];
    const handleMoveForwardTest = () => {
        console.log('selectedTest', selectedTest)
        if (selectedTest && !selectedTestsList.includes(selectedTest)) {
            setSelectedTestsList([...selectedTestsList, selectedTest]);
        }
    };
    const handleMoveBackwardTest = () => {
        console.log('selectedTest', selectedTest)
        if (selectedTest && selectedTestsList.includes(selectedTest)) {
            setSelectedTestsList(selectedTestsList.filter(test => test !== selectedTest));

        }
    };

    const handlePreviewClick = (()=>{
        setShowPreviewDialog(true)
        const data = {
            patientName,
            telNo,
            age,
            referredBy,
            sex,
            labNo,
            address,
            emailAddress,
            'selectedTestsList':selectedTestsList
        }

        setPatientData(data)

        
        
    })

    const handleBackClick=(()=>{
        console.log('hello');
        
    })

    return (
        <div className="fixed inset-0 z-20 flex  bg-black bg-opacity-80 font-manrope ">
            <div className="flex flex-col m-[100px] w-full bg-white px-  ">

                <div className="flex text-white font-medium text-sixteen w-full bg-primary px-[30px] py-[24px]">
                    Add Patient
                </div>

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

                {/* lists of tests */}
                <div className="flex flex-col mt-8 px-[30px]   ">

                    <div className="flex text-sixteen font-medium border-2">Lists of tests</div>
                    <div className="flex">
                        <div className="flex ">
                            <div className="flex flex-col bg-[#E6EEF5] border-2  ">
                                <div className="flex p-3">
                                    <input type="text" className='bg-white border-[1px] border-border rounded-border outline-none px-2'  placeholder='Name of tests' />
                                    <button className='bg-primary rounded-border  text-white px-9 p-2'>Search</button>

                                </div>

                                <div className="">
                                    <div className="flex justify-between bg-primary p-4 text-white">
                                        <span>Test name</span>
                                        <span>Amount</span>
                                    </div>
                                    <div className="flex flex-col  overflow-y-scroll h-40">
                                        {
                                            bodyTests && bodyTests.map((item, index) => (
                                                <div
                                                    key={index}
                                                    className={`flex justify-between px-4 p-1 hover:${selectedTest === item ? '' : 'bg-blue-100'} cursor-pointer ${selectedTest === item ? 'bg-blue-200' : ''}`}
                                                    onClick={() => setSelectedTest(item)}
                                                >
                                                    <span>{item}</span>
                                                    <span>Rs.150</span>
                                                </div>
                                            ))
                                        }
                                    </div>


                                </div>
                            </div>

                            <div className="flex flex-col justify-center px-4 gap-3">

                                <div className="flex bg-button-default  cursor-pointer rounded-full p-2 text-white hover:bg-button-hover  " onClick={handleMoveForwardTest}>
                                    <ArrowForwardIcon />

                                </div>
                                <div className="flex bg-button-default rounded-full p-2 text-white hover:bg-button-hover cursor-pointer" onClick={handleMoveBackwardTest} >
                                    <ArrowBackIcon />

                                </div>


                            </div>
                        </div>


                        {/* for the selected tests */}
                        <div className=" w-[400px]  bg-[#E6EEF5]">
                            <div className='bg-button-default text-white p-3 w-full'>Test name</div>
                            {
                                selectedTestsList.length > 0 && selectedTestsList.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`flex justify-between px-4 p-1 hover:${selectedTest === item ? '' : 'bg-blue-100'} cursor-pointer ${selectedTest === item ? 'bg-blue-200' : ''}`}
                                        onClick={() => setSelectedTest(item)}
                                    >
                                        {item}
                                    </div>
                                ))
                            }



                        </div>

                    </div>

                    <div className="flex justify-end gap-x-4">
                        <button className='bg-button-default p-3 text-white rounded-border mt-4' onClick={handlePreviewClick}>Preview</button>
                        <button className='bg-button-default p-3 text-white rounded-border mt-4' onClick={handleBackClick}>Back</button>

                    </div>









                </div>


            </div>



            {
                showPreviewDialog &&(
                    <PreviewDialog data={patientData}/>
                )
            }


        </div>
    )
}

export default AddPatients