import React, { useEffect, useState } from 'react'
import Title from '../../../components/Title'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';


import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { usePatientloginMutation } from '../../../store/APIFeatures/PatientApi';
import { toast } from 'react-toastify';
import { useStaffLoginMutation } from '../../../store/APIFeatures/StaffApi';
import { useAdminLoginMutation } from '../../../store/APIFeatures/AdminApi';

const Login = () => {
    const [staffLogin, { data: loggedInPatientData, isLoading, isSuccess }] = useAdminLoginMutation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleLogin = () => {
        var loggingInData = { "email": email, "password": password }
        // loggingInData = JSON.stringify(loggingInData)
        staffLogin(loggingInData)
    }

    useEffect(() => {
        if (isSuccess) {
            toast.success('sucessful login')
            console.log('loggedInPatientData', loggedInPatientData)
        }
    })

    return (
        <div className='mx-[20px] md:mx-0  font-manrope mt-20 md:mt-0'>
            {
                window.innerWidth <= 768 ? (
                    <div className="space-y-[40px]">
                        <div className="flex justify-center md:hidden">
                            <Title title="Login" />

                        </div>

                        <div className="flex justify-center">
                            <img src="/images/loginimage.png" alt="" className='h-[155px] md:h-[259px]' />
                        </div>

                        {/* this will contain the email and password section */}
                        <div className="flex flex-col space-y-[24px] ">
                            <div className="relative rounded-border border-border border-[1px] p-2 text-[14px]">
                                <span className='bg-white text-border absolute -top-3 px-2 text-[14px]' >Email</span>
                                <input type="email" className='w-full outline-none p-2' placeholder='helloworld@gmail.com' onChange={(e) => setEmail(e.target.value)} />

                            </div>
                            <div className="relative rounded-border border-border border-[1px] p-2 text-[14px]">
                                <span className='bg-white text-border absolute -top-3 px-2  text-[14px]' >Password</span>
                                <input type="text" className='w-full outline-none p-2 ' placeholder='helloworld@gmail.com' onChange={(e) => setPassword(e.target.value)} />

                            </div>


                            <div className="flex justify-between font-manrope text-border text-[16px]">
                                <div className="flex space-x-2">
                                    <input type="checkbox" />
                                    <span className='text-[#313131]'>Remember me</span>
                                </div>

                                <span className='font-manrope text-alert'>Forgot password?</span>

                            </div>




                        </div>
                        <div className="flex flex-col space-y-5 text-16px">
                            <button className='bg-button-default hover:bg-button-hover w-full text-white font-manrope font-normal p-3 rounded-border' onClick={handleLogin}>Login</button>

                            <div className="flex justify-center space-x-1">
                                <span className='text-[#4D4D4D]'>Don't have an account?</span>
                                <span className='text-alert'>Register</span>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="flex w-full ">
                        <div className="flex w-1/3 ">
                            <img src="/images/loginleft.png" alt="" className='h-screen w-full object-cover' />

                        </div>
                        <div className="flex w-2/3  justify-center border-red-400 pt-[60px]">
                            <div className=" w-[622px] space-y-[40px]">
                                <div className="flex justify-center">
                                    <img src="/images/logo.png" alt="" className='h-[71px]' />
                                </div>

                                <Title title='Login' />

                                <div className="flex flex-col space-y-[24px] ">
                                    {/* <TextField
                                        required
                                        label="Email"
                                        placeholder="helloworld@gmail.com"
                                        // variant="outlined"
                                        fullWidth
                                        slotProps={{
                                            inputLabel: {
                                                shrink: true
                                            },
                                        }}
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                fontFamily: 'Manrope, sans-serif', // Input font
                                                fontSize: '14px', // Input font size
                                                borderRadius: '5px', // Border radius for input field
                                                '& fieldset': {
                                                    borderColor: '#79747E', // Border color
                                                },
                                                '&:hover fieldset': {
                                                    borderColor: '#79747E', // Change border color on hover
                                                },
                                                '&.Mui-focused fieldset': {
                                                    borderColor: '#79747E', // Border color when focused
                                                },
                                            },
                                            '& .MuiInputLabel-root': {
                                                fontFamily: 'Manrope, sans-serif', // Label font
                                                fontSize: '16px', // Label font size
                                                // color:'#79747E'
                                            },
                                            '& .MuiInputLabel-root.Mui-focused': {
                                                color: '#79747E', // Label color when focused
                                            },
                                        }}
                                    />
                                    <TextField
                                        required
                                        label="Password"
                                        type={showPassword ? 'text' : 'password'}
                                        // placeholder="helloworld@gmail.com"
                                        // variant="outlined"
                                        fullWidth
                                        onClick={handleClickShowPassword}
                                        slotProps={{
                                            inputLabel: {
                                                shrink: true
                                            },
                                        }}

                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    // onMouseDown={handleMouseDownPassword}
                                                    // onMouseUp={handleMouseUpPassword}
                                                    edge="end"
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                fontFamily: 'Manrope, sans-serif', // Input font
                                                fontSize: '14px', // Input font size
                                                borderRadius: '5px', // Border radius for input field
                                                '& fieldset': {
                                                    borderColor: '#79747E', // Border color
                                                },
                                                '&:hover fieldset': {
                                                    borderColor: '#79747E', // Change border color on hover
                                                },
                                                '&.Mui-focused fieldset': {
                                                    borderColor: '#79747E', // Border color when focused
                                                },
                                            },
                                            '& .MuiInputLabel-root': {
                                                fontFamily: 'Manrope, sans-serif', // Label font
                                                fontSize: '16px', // Label font size
                                                // color:'#79747E'
                                            },
                                            '& .MuiInputLabel-root.Mui-focused': {
                                                color: '#79747E', // Label color when focused
                                            },
                                        }}

                                    /> */}

                                    <div className="relative rounded-border border-border border-[1px] p-2 text-[14px]">
                                        <span className='bg-white text-border absolute -top-3 px-2 text-[14px]' >Email</span>
                                        <input type="email" className='w-full outline-none p-2' placeholder='helloworld@gmail.com' onChange={(e) => setEmail(e.target.value)} />

                                    </div>
                                    <div className="relative rounded-border border-border border-[1px] p-2 text-[14px]">
                                        <span className='bg-white text-border absolute -top-3 px-2  text-[14px]' >Password</span>
                                        <input type="text" className='w-full outline-none p-2 ' placeholder='helloworld@gmail.com' onChange={(e) => setPassword(e.target.value)} />

                                    </div>


                                    <div className="flex justify-between text-[16px] text-border font-manrope ">
                                        <div className="flex space-x-2">
                                            <input type="checkbox" />
                                            <span className='text-[#313131]'>Remember me</span>
                                        </div>

                                        <span className='font-manrope text-alert'>Forgot password?</span>

                                    </div>




                                </div>
                                <div className="flex flex-col space-y-5">
                                    <button className='bg-button-default hover:bg-button-hover w-full text-white font-manrope font-normal p-3 rounded-border text-[16px] font-bold' onClick={handleLogin}>Login</button>

                                    <div className="flex justify-center space-x-1 text-[16px]">
                                        <span className='text-[#4D4D4D]'>Don't have an account?</span>
                                        <span className='text-alert'>Register</span>
                                    </div>
                                </div>

                            </div>


                        </div>
                    </div>
                )
            }




        </div >



    )
}

export default Login