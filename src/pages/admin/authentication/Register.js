
// Author: Kalyan Bikram Adhikari
// Created-Date: 2024/10/03
// Modified-Date: 


import React, { useEffect, useState } from 'react'
import { useAdminRegisterMutation } from '../../../store/APIFeatures/AdminApi'
import { debounce } from '../../../optimization/Debouncing'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';


const testRegisterData = {
    "email": "eve.holt@reqres.in",
    "password": "pistol"
}

const departments = [
    'Hematology',
    'Microbiology',
    'Biochemistry',
    'Pathology',
    'Immunology',
    'Phlebotomy',
    'Clinical Chemistry',
    'Histology',
    
];

const Register = () => {

    const [adminRegister, { data: adminRegisterData, isLoading, isSuccess }] = useAdminRegisterMutation()

    const [formData, setFormData] = useState({
        username: '',
        fullname: '',
        email: '',
        address: '',
        phoneNumber: '',
        designation: '',
        qualification: '',
        department:'',
        NHPC: '',
        signature: '',
        profilePic: '',
        password: '',
        confirmPassword: ''
    });

    const navigate = useNavigate()

    const debouncedUpdate = debounce((name, value) => {
        console.log('name, value', name, value)
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }, 500);


    const handleInputChange = (e) => {
        const { name, value, files } = e.target
        if (files) {
            // If it's a file input, set the file
            debouncedUpdate(name, files[0]); // Use the first file
        } else {
            debouncedUpdate(name, value);
        }
    }
    
    const handleRegisterAdmin =()=>{
        // adminRegister(formData)
        adminRegister(testRegisterData)
    }

    useEffect(()=>{
        if(isSuccess){
            navigate('permissions')
            toast.success('Registered Sucessfully. Please add permissions')
        }
    })






    return (
        <div className='mt-10'>
            <div className="flex flex-col gap-y-9">


                <div className="relative rounded-border border-border border-[1px] p-2 text-[14px]">
                    <span className='bg-white text-border absolute -top-3 px-2 text-[14px]' >User Name</span>
                    <input name='username' type="text" className='w-full outline-none p-2' placeholder='John' onChange={handleInputChange} />

                </div>
                <div className="relative rounded-border border-border border-[1px] p-2 text-[14px]">
                    <span className='bg-white text-border absolute -top-3 px-2  text-[14px]' >Full Name</span>
                    <input name='fullname' type="text" className='w-full outline-none p-2 ' placeholder='John Doe' onChange={handleInputChange} />

                </div>
                <div className="relative rounded-border border-border border-[1px] p-2 text-[14px]">
                    <span className='bg-white text-border absolute -top-3 px-2 text-[14px]' >Email</span>
                    <input name='email' type="email" className='w-full outline-none p-2' placeholder='helloworld@gmail.com' onChange={handleInputChange} />

                </div>
                <div className="relative rounded-border border-border border-[1px] p-2 text-[14px]">
                    <span className='bg-white text-border absolute -top-3 px-2  text-[14px]' >Address</span>
                    <input type="text" name='address' className='w-full outline-none p-2 ' placeholder='Kathmandu, Nepal' onChange={handleInputChange} />

                </div>
                <div className="relative rounded-border border-border border-[1px] p-2 text-[14px]">
                    <span className='bg-white text-border absolute -top-3 px-2 text-[14px]' >Phone Number</span>
                    <input type="number" name='phoneNumber' className='w-full outline-none p-2' placeholder='98415262732' onChange={handleInputChange} />

                </div>
                <div className="relative rounded-border border-border border-[1px] p-2 text-[14px]">
                    <span className='bg-white text-border absolute -top-3 px-2  text-[14px]' >Designation</span>
                    <input type="text" name='designation' className='w-full outline-none p-2 ' placeholder='Lab Technician' onChange={handleInputChange} />

                </div>

                <div className="relative rounded-border border-border border-[1px] p-2 text-[14px]">
                    <span className='bg-white text-border absolute -top-3 px-2 text-[14px]' >Qualification</span>
                    <input type="text" name='qualification' className='w-full outline-none p-2' placeholder='Lab Technician' onChange={handleInputChange} />

                </div>

                <div className="relative rounded-border border-border border-[1px] p-2 text-[14px]">
                    <span className='bg-white text-border absolute -top-3 px-2 text-[14px]'>Department</span>
                    <select 
                        name="department" 
                        className='w-full outline-none p-2' 
                        onChange={handleInputChange}
                        value={formData.department} 
                    >
                        <option value="" disabled>Select Department</option>
                        {departments.map((dept, index) => (
                            <option key={index} value={dept}>{dept}</option>
                        ))}
                    </select>
                </div>
                <div className="relative rounded-border border-border border-[1px] p-2 text-[14px]">
                    <span className='bg-white text-border absolute -top-3 px-2  text-[14px]' >NHPC No.</span>
                    <input type="text" name='NHPC' className='w-full outline-none p-2 ' placeholder='abcd1234' onChange={handleInputChange} />

                </div>
                <div className="relative rounded-border border-border border-[1px] p-2 text-[14px]">
                    <span className='bg-white text-border absolute -top-3 px-2 text-[14px]' >Signature </span>
                    <input type="file" name='signature' className='w-full outline-none p-2' onChange={handleInputChange} />

                </div>
                <div className="relative rounded-border border-border border-[1px] p-2 text-[14px]">
                    <span className='bg-white text-border absolute -top-3 px-2 text-[14px]' >Picture </span>
                    <input type="file" name='profilePic' className='w-full outline-none p-2' onChange={handleInputChange} />

                </div>
                <div className="relative rounded-border border-border border-[1px] p-2 text-[14px]">
                    <span className='bg-white text-border absolute -top-3 px-2 text-[14px]' >Password </span>
                    <input type="password" name='password' className='w-full outline-none p-2' onChange={handleInputChange} />

                </div>
                <div className="relative rounded-border border-border border-[1px] p-2 text-[14px]">
                    <span className='bg-white text-border absolute -top-3 px-2 text-[14px]' >Confirm Password </span>
                    <input type="password" name='confirmPassword' className='w-full outline-none p-2' onChange={handleInputChange} />

                </div>
            </div>
            <div className="flex justify-end my-10">
                {/* <Link to='/permissions'> */}
                    <button className='bg-button-default hover:bg-button-hover w-full text-white font-manrope font-normal p-3 rounded-border text-[16px] font-bold' onClick={handleRegisterAdmin}>Register Admin</button>
                {/* </Link> */}
            </div>


        </div>
    )
}

export default Register