import React, { useState } from 'react'
import SidebarButton from './SidebarButton';

const Sidebar = () => {
    const [activeButton, setActiveButton] = useState('Patients');


    const PatientIcon = ({ isActive, openMobileSideBar }) => (
        <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.66665 10.1667C3.9152 10.1667 3.19453 10.4652 2.66318 10.9966C2.13182 11.5279 1.83331 12.2486 1.83331 13C1.83331 13.3095 1.95623 13.6062 2.17502 13.825C2.39381 14.0438 2.69056 14.1667 2.99998 14.1667H13C13.3094 14.1667 13.6061 14.0438 13.8249 13.825C14.0437 13.6062 14.1666 13.3095 14.1666 13C14.1666 12.2486 13.8681 11.5279 13.3368 10.9966C12.8054 10.4652 12.0848 10.1667 11.3333 10.1667H4.66665ZM1.95607 10.2895C2.67496 9.57057 3.64998 9.16671 4.66665 9.16671H11.3333C12.35 9.16671 13.325 9.57057 14.0439 10.2895C14.7628 11.0084 15.1666 11.9834 15.1666 13C15.1666 13.5747 14.9384 14.1258 14.532 14.5321C14.1257 14.9384 13.5746 15.1667 13 15.1667H2.99998C2.42534 15.1667 1.87424 14.9384 1.46791 14.5321C1.06159 14.1258 0.833313 13.5747 0.833313 13C0.833313 11.9834 1.23718 11.0084 1.95607 10.2895Z" fill={isActive && openMobileSideBar ? '#ffffff' : openMobileSideBar ? '#ffffff' : isActive ? '#ffffff' : '#99A0A5'} />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.99998 1.83337C6.89541 1.83337 5.99998 2.7288 5.99998 3.83337C5.99998 4.93794 6.89541 5.83337 7.99998 5.83337C9.10455 5.83337 9.99998 4.93794 9.99998 3.83337C9.99998 2.7288 9.10455 1.83337 7.99998 1.83337ZM4.99998 3.83337C4.99998 2.17652 6.34313 0.833374 7.99998 0.833374C9.65683 0.833374 11 2.17652 11 3.83337C11 5.49023 9.65683 6.83337 7.99998 6.83337C6.34313 6.83337 4.99998 5.49023 4.99998 3.83337Z" fill={isActive && openMobileSideBar ? '#ffffff' : openMobileSideBar ? '#ffffff' : isActive ? '#ffffff' : '#99A0A5'} />
        </svg>


    );
    const DashboardIcon = ({ isActive, openMobileSideBar }) => (
        <svg width="22" height="23" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1713_3615)">
                <path d="M11.5187 7.9342V2.8717H18.1V7.9342H11.5187ZM1.89999 10.9717V2.8717H8.48124V10.9717H1.89999ZM11.5187 19.0717V10.9717H18.1V19.0717H11.5187ZM1.89999 19.0717V14.0092H8.48124V19.0717H1.89999ZM2.91249 9.9592H7.46874V3.8842H2.91249V9.9592ZM12.5312 18.0592H17.0875V11.9842H12.5312V18.0592ZM12.5312 6.9217H17.0875V3.8842H12.5312V6.9217ZM2.91249 18.0592H7.46874V15.0217H2.91249V18.0592Z" fill={isActive && openMobileSideBar ? '#ffffff' : openMobileSideBar ? '#ffffff' : isActive ? '#ffffff' : '#99A0A5'} />
            </g>
            <defs>
                <clipPath id="clip0_1713_3615">
                    <rect width="18" height="18" fill="white" transform="translate(1 1.97168)" />
                </clipPath>
            </defs>
        </svg>


    );
    const SampleIcon = ({ isActive, openMobileSideBar }) => (
        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.70001 8.56413L7.59251 2.67163L10.8333 5.91246L4.94085 11.805L1.70001 8.56413ZM2.87835 8.56413L4.94085 10.6266L9.65501 5.91246L7.59251 3.84996L2.87835 8.56413Z" fill={isActive && openMobileSideBar ? '#ffffff' : openMobileSideBar ? '#ffffff' : isActive ? '#ffffff' : '#99A0A5'} />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.94086 10.6266L9.65502 5.91248L17.0204 13.2783C17.3357 13.5865 17.5866 13.9543 17.7587 14.3601C17.9309 14.766 18.0208 15.202 18.0232 15.6429C18.0257 16.0838 17.9407 16.5208 17.7731 16.9286C17.6055 17.3363 17.3587 17.7068 17.047 18.0186C16.7352 18.3303 16.3647 18.5771 15.9569 18.7447C15.5491 18.9123 15.1122 18.9973 14.6713 18.9948C14.2304 18.9924 13.7944 18.9025 13.3885 18.7303C12.9826 18.5582 12.6149 18.3073 12.3067 17.9921L4.94086 10.6266ZM6.11919 10.6266L12.8959 17.4029C13.366 17.8654 13.9998 18.1235 14.6593 18.1208C15.3189 18.1181 15.9506 17.8549 16.4169 17.3886C16.8833 16.9222 17.1465 16.2905 17.1491 15.631C17.1518 14.9715 16.8938 14.3376 16.4313 13.8675L9.65502 7.09081L6.11919 10.6266Z" fill={isActive && openMobileSideBar ? '#ffffff' : openMobileSideBar ? '#ffffff' : isActive ? '#ffffff' : '#99A0A5'} />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.18169 10.9212L11.4225 7.67998L16.4313 12.6887L13.1904 15.93L8.18169 10.9212ZM9.36002 10.9212L13.1904 14.7512L15.2529 12.6887L11.4225 8.85873L9.36002 10.9212ZM3.46752 6.79664L6.56127 9.88998L5.97211 10.4791L2.87836 7.38539L3.46752 6.79664ZM4.94086 5.32331L8.03419 8.41664L7.44502 9.00623L4.35169 5.91248L4.94086 5.32331ZM6.41377 3.84998L9.50752 6.94373L8.91836 7.53289L5.82461 4.43914L6.41377 3.84998Z" fill={isActive && openMobileSideBar ? '#ffffff' : openMobileSideBar ? '#ffffff' : isActive ? '#ffffff' : '#99A0A5'} />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6675 14.4012C10.4013 14.6679 10.2392 14.9054 10.1975 15.0304L9.40668 14.7666C9.51251 14.4499 9.79209 14.0983 10.0783 13.8124C10.375 13.5154 10.7421 13.2262 11.0888 13.0529L11.4617 13.7979C11.2192 13.9191 10.9233 14.1458 10.6675 14.4012Z" fill={isActive && openMobileSideBar ? '#ffffff' : openMobileSideBar ? '#ffffff' : isActive ? '#ffffff' : '#99A0A5'} />
        </svg>


    );
    const SettingIcon = ({ isActive, openMobileSideBar }) => (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.60386 2.56944C7.95919 1.10576 10.0408 1.10576 10.3961 2.56944C10.6257 3.51495 11.709 3.96366 12.5398 3.45739C13.8261 2.67367 15.298 4.1456 14.5143 5.43183C14.008 6.26273 14.4567 7.34599 15.4022 7.57553C16.8659 7.93087 16.8659 10.0125 15.4022 10.3678C14.4567 10.5974 14.008 11.6806 14.5143 12.5115C15.298 13.7978 13.8261 15.2697 12.5398 14.486C11.709 13.9797 10.6257 14.4284 10.3961 15.3739C10.0408 16.8376 7.95919 16.8376 7.60386 15.3739C7.37431 14.4284 6.29105 13.9797 5.46016 14.486C4.17392 15.2697 2.70199 13.7978 3.48571 12.5115C3.99198 11.6806 3.54327 10.5974 2.59776 10.3678C1.13408 10.0125 1.13408 7.93087 2.59776 7.57553C3.54327 7.34599 3.99198 6.26273 3.48571 5.43183C2.70199 4.1456 4.17392 2.67367 5.46015 3.45739C6.29105 3.96366 7.37431 3.51495 7.60386 2.56944Z" stroke="#A3A7AC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M11.5 8.97168C11.5 10.3524 10.3807 11.4717 9 11.4717C7.61929 11.4717 6.5 10.3524 6.5 8.97168C6.5 7.59097 7.61929 6.47168 9 6.47168C10.3807 6.47168 11.5 7.59097 11.5 8.97168Z" stroke="#A3A7AC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>


    );
    // const ProfileIcon = ({ isActive, openMobileSideBar }) => (
    //     <svg width="16" height="35" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg "

    //     >
    //         <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 10C12.5 7.34784 13.5536 4.8043 15.4289 2.92893C17.3043 1.05357 19.8478 0 22.5 0C25.1522 0 27.6957 1.05357 29.5711 2.92893C31.4464 4.8043 32.5 7.34784 32.5 10C32.5 12.6522 31.4464 15.1957 29.5711 17.0711C27.6957 18.9464 25.1522 20 22.5 20C19.8478 20 17.3043 18.9464 15.4289 17.0711C13.5536 15.1957 12.5 12.6522 12.5 10ZM12.5 25C9.18479 25 6.00537 26.317 3.66117 28.6612C1.31696 31.0054 0 34.1848 0 37.5C0 39.4891 0.790177 41.3968 2.1967 42.8033C3.60322 44.2098 5.51088 45 7.5 45H37.5C39.4891 45 41.3968 44.2098 42.8033 42.8033C44.2098 41.3968 45 39.4891 45 37.5C45 34.1848 43.683 31.0054 41.3388 28.6612C38.9946 26.317 35.8152 25 32.5 25H12.5Z"
    //             fill={isActive && openMobileSideBar ? '#ffffff' : openMobileSideBar ? '#ffffff' : isActive ? '#ffffff' : '#99A0A5'}

    //         />
    //     </svg>

    // );
    // const ProfileIcon = ({ isActive, openMobileSideBar }) => (
    //     <svg width="16" height="35" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg "

    //     >
    //         <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 10C12.5 7.34784 13.5536 4.8043 15.4289 2.92893C17.3043 1.05357 19.8478 0 22.5 0C25.1522 0 27.6957 1.05357 29.5711 2.92893C31.4464 4.8043 32.5 7.34784 32.5 10C32.5 12.6522 31.4464 15.1957 29.5711 17.0711C27.6957 18.9464 25.1522 20 22.5 20C19.8478 20 17.3043 18.9464 15.4289 17.0711C13.5536 15.1957 12.5 12.6522 12.5 10ZM12.5 25C9.18479 25 6.00537 26.317 3.66117 28.6612C1.31696 31.0054 0 34.1848 0 37.5C0 39.4891 0.790177 41.3968 2.1967 42.8033C3.60322 44.2098 5.51088 45 7.5 45H37.5C39.4891 45 41.3968 44.2098 42.8033 42.8033C44.2098 41.3968 45 39.4891 45 37.5C45 34.1848 43.683 31.0054 41.3388 28.6612C38.9946 26.317 35.8152 25 32.5 25H12.5Z"
    //             fill={isActive && openMobileSideBar ? '#ffffff' : openMobileSideBar ? '#ffffff' : isActive ? '#ffffff' : '#99A0A5'}

    //         />
    //     </svg>

    // );
    // const ProfileIcon = ({ isActive, openMobileSideBar }) => (
    //     <svg width="16" height="35" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg "

    //     >
    //         <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 10C12.5 7.34784 13.5536 4.8043 15.4289 2.92893C17.3043 1.05357 19.8478 0 22.5 0C25.1522 0 27.6957 1.05357 29.5711 2.92893C31.4464 4.8043 32.5 7.34784 32.5 10C32.5 12.6522 31.4464 15.1957 29.5711 17.0711C27.6957 18.9464 25.1522 20 22.5 20C19.8478 20 17.3043 18.9464 15.4289 17.0711C13.5536 15.1957 12.5 12.6522 12.5 10ZM12.5 25C9.18479 25 6.00537 26.317 3.66117 28.6612C1.31696 31.0054 0 34.1848 0 37.5C0 39.4891 0.790177 41.3968 2.1967 42.8033C3.60322 44.2098 5.51088 45 7.5 45H37.5C39.4891 45 41.3968 44.2098 42.8033 42.8033C44.2098 41.3968 45 39.4891 45 37.5C45 34.1848 43.683 31.0054 41.3388 28.6612C38.9946 26.317 35.8152 25 32.5 25H12.5Z"
    //             fill={isActive && openMobileSideBar ? '#ffffff' : openMobileSideBar ? '#ffffff' : isActive ? '#ffffff' : '#99A0A5'}

    //         />
    //     </svg>

    // );
    return (
        <div className='2xl:w-1/6 xl:w-1/5 lg:w-1/4 bg-[#00192F] h-screen'>

            <div className="flex  justify-center py-8 ">
                <img src="/images/logo.png" alt="" className='h-[75px]' />
            </div>

            <div className="flex flex-col gap-[24px]">
                <div className="flex flex-col px-[12px] mt-[12px] gap-[10px]">
                    {/* <Link to="/profile"> */}
                    <SidebarButton
                        icon={PatientIcon}
                        title="Patients"
                        isActive={activeButton === 'Patients'}
                        onClick={() => { setActiveButton('Patients'); }} //dispatch(setOpenMobileSidebar())

                    />
                    {/* </Link> */}
                    {/* <Link to="/profile"> */}
                    <SidebarButton
                        icon={DashboardIcon}
                        title="Dashboard"
                        isActive={activeButton === 'Dashboard'}
                        onClick={() => { setActiveButton('Dashboard'); }} //dispatch(setOpenMobileSidebar())

                    />
                    {/* </Link> */}
                    {/* <Link to="/profile"> */}
                    <SidebarButton
                        icon={SampleIcon}
                        title="Sample"
                        isActive={activeButton === 'Sample'}
                        onClick={() => { setActiveButton('Sample'); }} //dispatch(setOpenMobileSidebar())

                    />
                    {/* </Link> */}
                    {/* <Link to="/profile"> */}
                    <SidebarButton
                        icon={SettingIcon}
                        title="Settings"
                        isActive={activeButton === 'Settings'}
                        onClick={() => { setActiveButton('Settings'); }} //dispatch(setOpenMobileSidebar())

                    />
                    {/* </Link> */}
                    {/* <Link to="/profile"> */}
                    <SidebarButton
                        icon={SettingIcon}
                        title="Settings"
                        isActive={activeButton === 'Settings'}
                        onClick={() => { setActiveButton('Settings'); }} //dispatch(setOpenMobileSidebar())

                    />
                    {/* </Link> */}



                </div>


                <hr className=' border-[#172E42]' />

                <div className="space-y-[10px] px-[10px]">
                    {/* <Link to="/profile"> */}
                    <SidebarButton
                        icon={SettingIcon}
                        title="Settings"
                        isActive={activeButton === 'Settings'}
                        onClick={() => { setActiveButton('Settings'); }} //dispatch(setOpenMobileSidebar())

                    />
                    {/* </Link> */}
                    {/* <Link to="/profile"> */}
                    <SidebarButton
                        icon={SettingIcon}
                        title="Settings"
                        isActive={activeButton === 'Settings'}
                        onClick={() => { setActiveButton('Settings'); }} //dispatch(setOpenMobileSidebar())

                    />
                    {/* </Link> */}


                </div>
                <div className="font-manrope text-normal ">
                    <hr className=' border-[#172E42]' />
                    <div className="flex  p-[24px]">
                        <div className="flex space-x-4">
                            <img src="/images/me.jpg" alt="" className='h-11 w-11 rounded-full' />
                            
                            <div className="flex flex-col">
                                <span className='text-[#99A0A5]'>Welcome back 👋</span>
                                <span className='text-white text-[16px]'>Admin</span>
                            </div>

                            
                        </div>
                    </div>


                </div>





            </div>



        </div>
    )
}

export default Sidebar