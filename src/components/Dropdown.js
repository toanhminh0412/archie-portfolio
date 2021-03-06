import React from "react";
import { auth } from "../App";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Dropdown({reference, contactRef}) {
    const login = window.localStorage.getItem('login');
    const navigate = useNavigate();

    const scrollToContact = (ref) => {
        ref.current.scrollIntoView({behavior: "smooth", block:"center"});
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
        <ul className='absolute top-12 right-0 z-30 flex flex-col lg:hidden'>
            <a href='/posts'><li className='py-2 text-center bg-indigo-900 border-b border-black text-white w-24 cursor-pointer font-light hover:font-medium md:w-32 md:text-lg'>Posts</li></a>
            <a href='/projects'><li className='py-2 text-center bg-indigo-900 border-b border-black text-white w-24 cursor-pointer font-light hover:font-medium md:w-32 md:text-lg'>Projects</li></a>
            {login === "true" ? (<a href='/edit'><li className='py-2 text-center bg-indigo-900 border-b border-black text-white w-24 cursor-pointer font-light hover:font-medium md:w-32 md:text-lg'>Edit</li></a>) : (<li></li>)}
            {login === "true" ? (<a href='/message'><li className='py-2 text-center bg-indigo-900 border-b border-black text-white w-24 cursor-pointer font-light hover:font-medium md:w-32 md:text-lg'>Message</li></a>) : (<li></li>)}
            <li ref={reference} onClick={() => {scrollToContact(contactRef)}} className='py-2 text-center bg-green-900 border-b border-black text-white w-24 cursor-pointer font-light hover:font-medium md:w-32 md:text-lg'>Contact</li>
            {login !== "true" ? (<a href='/login'><li className='py-2 text-center bg-amber-600 border-b border-black text-white w-24 cursor-pointer font-light hover:font-medium md:w-32 md:text-lg'>Login</li></a>) : (<li className='py-2 text-center bg-indigo-900 border-b border-black text-white w-24 cursor-pointer font-light hover:font-medium md:w-32 md:text-lg' onClick={logOut}>Logout</li>)}
        </ul>
    )
}