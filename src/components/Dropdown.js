import React from "react";

export default function Dropdown() {
    return (
        <ul className='absolute top-12 right-0 z-30 flex flex-col lg:hidden'>
            <li className='py-2 text-center bg-indigo-900 border-b border-black text-white w-24 cursor-pointer font-light hover:font-medium md:w-32 md:text-lg'>Posts</li>
            <li className='py-2 text-center bg-indigo-900 border-b border-black text-white w-24 cursor-pointer font-light hover:font-medium md:w-32 md:text-lg'>Projects</li>
            <li className='py-2 text-center bg-indigo-900 border-b border-black text-white w-24 cursor-pointer font-light hover:font-medium md:w-32 md:text-lg'>Contact</li>
            <li className='py-2 text-center bg-indigo-900 border-b border-black text-white w-24 cursor-pointer font-light hover:font-medium md:w-32 md:text-lg'>Login</li>
        </ul>
    )
}