import React, {useState} from "react";
import {IoMdMenu} from "react-icons/io";
import Dropdown from './Dropdown';

export default function Header({reference, click}) {
    const [dropdown, setDropdown] = useState(false)

    const toggleDropdown = () => {
        if (dropdown) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    }

    return (
        <header className="bg-gradient-to-r from-indigo-900 to-indigo-800 h-12 shadow-lg show-indigo-900 flex flex-row">
            <div className='my-auto ml-4 lg:ml-12'>
                <h1 className='uppercase text-xl font-bold text-white cursor-pointer'>Archie To</h1>
            </div>
            <ul className='hidden my-auto cursor-pointer lg:flex lg:flex-row lg:ml-12 xl:ml-20'>
                <li className='font-thin hover:font-medium text-md text-white lg:mr-8 xl:mr-12 xl:text-lg'>Posts</li>
                <li className='font-thin hover:font-medium text-md text-white lg:mr-8 xl:mr-12 xl:text-lg'>Projects</li>
            </ul>
            <div className='hidden absolute cursor-pointer lg:flex lg:flex-row lg:right-8 xl:right-16'>
                <div ref={reference} onClick={click} className='h-12 w-fit bg-green-700 hover:bg-green-900 pt-3 px-4'>
                    <p className='text-lg text-white'>Contact</p>
                </div>
                <div className='h-12 w-fit bg-amber-600 hover:bg-amber-800 pt-3 px-4'>
                    <p className='text-lg text-white'>Login</p>
                </div>
            </div>
            <div className='absolute top-2 right-4 md:right-8 lg:hidden'>
                <IoMdMenu onClick={toggleDropdown} className='text-4xl text-white hover:text-orange-500'/>
            </div>
            {dropdown ? <Dropdown/>:<div></div>}
        </header>
    )
}