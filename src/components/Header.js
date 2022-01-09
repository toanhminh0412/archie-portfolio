import React, {useState, useRef} from "react";
import {IoMdMenu} from "react-icons/io";
import Dropdown from './Dropdown';
import { auth } from "../App";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Header({reference, click, contact}) {
    const [dropdown, setDropdown] = useState(false)
    const login = window.localStorage.getItem('login');
    const navigate = useNavigate();

    const contactDropdownRef = useRef();

    const toggleDropdown = () => {
        if (dropdown) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    }

    const logOut = () => {
        signOut(auth)
        .then(() => {
            window.localStorage.setItem('login', 'false');
            navigate('/');
        }).catch(error => {
            console.log(error)
        })
    }

    return (
        <header className="fixed z-40 w-full bg-gradient-to-r from-indigo-900 to-indigo-800 h-12 shadow-lg shadow-black show-indigo-900 flex flex-row">
            <div className='my-auto ml-4 lg:ml-12'>
                <a href='/'><h1 className='uppercase text-xl font-bold text-white cursor-pointer'>Archie To</h1></a>
            </div>
            <ul className='hidden my-auto cursor-pointer lg:flex lg:flex-row lg:ml-12 xl:ml-20'>
                <li className='font-thin hover:font-medium text-md text-white lg:mr-8 xl:mr-12 xl:text-lg'><a href='/posts'>Posts</a></li>
                <li className='font-thin hover:font-medium text-md text-white lg:mr-8 xl:mr-12 xl:text-lg'><a href='/projects'>Projects</a></li>
                {login === "true" ? (<li className='font-thin hover:font-medium text-md text-white lg:mr-8 xl:mr-12 xl:text-lg'><a href='/edit'>Edit</a></li>) : (<li></li>)}
                {login === "true" ? (<li className='font-thin hover:font-medium text-md text-white lg:mr-8 xl:mr-12 xl:text-lg'><a href='/message'>Message</a></li>) : (<li></li>)}
            </ul>
            <div className='hidden absolute cursor-pointer lg:flex lg:flex-row lg:right-8 xl:right-16'>
                <div ref={reference} onClick={click} className='h-12 w-fit bg-green-700 hover:bg-green-900 pt-3 px-4'>
                    <p className='text-lg text-white'>Contact</p>
                </div>
                {login === "false" ? 
                (<a href='/login'><div className='h-12 w-fit bg-amber-600 hover:bg-amber-800 pt-3 px-4'>
                <p className='text-lg text-white'>Login</p>
            </div></a>):
                (<div onClick={logOut} className='h-12 w-fit bg-amber-600 hover:bg-amber-800 pt-3 px-4'>
                <p className='text-lg text-white'>Logout</p>
            </div>)}
                
            </div>
            <div className='absolute top-2 right-4 md:right-8 lg:hidden'>
                <IoMdMenu onClick={toggleDropdown} className='text-4xl text-white hover:text-orange-500'/>
            </div>
            {dropdown ? <Dropdown reference={contactDropdownRef} contactRef={contact}/>:<div></div>}
        </header>
    )
}