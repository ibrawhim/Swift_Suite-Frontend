import React, { useContext, useState } from 'react'
import { AppContext } from '../context/Dashboard'
import { MdMenu } from 'react-icons/md'
import DropdownUser from './DropdownUser'
import { IoSettingsOutline } from "react-icons/io5";

import Searchinput from './Searchinput'
import { VscBell } from "react-icons/vsc";

const Header = () => {
    const { toggleSideBar } = useContext(AppContext)
    

    return (
        <>
            <div className=' fixed top-0 right-0 left-0 lg:ms-[22%] p-5 z-50  shadow-sm bg-white '>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center justify-between gap-5'>
                        <div className="lg:hidden cursor-pointer" onClick={() => toggleSideBar()}>
                            <MdMenu size={25} />
                        </div>
                    </div>
                    <div className='flex items-center justify-between md:gap-10 gap-6'>
                        <div className='flex items-center md:gap-10 gap-10 lg:ms-0 ms-24'>
                            <Searchinput />
                            <IoSettingsOutline className='lg:ms-[180px]' size={20} />
                            <VscBell size={20} />
                            <DropdownUser />

                        </div>
                    </div>
                </div>
            </div>

        </>
    )

}

export default Header