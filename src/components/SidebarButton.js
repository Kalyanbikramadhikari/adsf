import React from 'react'

const SidebarButton = ({icon:Icon, title, isActive}) => {
  return (
    <div className={`flex items-center font-manrope space-x-3 text-[16px] rounded-[99px] text-white p-4 hover:bg-[#1D3B56] ${isActive? ' bg-[#0A375F] text-white':'text-[#99A0A5]'} `}>
        <span className={`${isActive?'text-white':'text-[#99A0A5]'}`}><Icon isActive={isActive} openMobileSideBar={false}/></span>
        <span  className='font-manrope text-[16px]'>{title}</span>

    </div>
  )
}

export default SidebarButton