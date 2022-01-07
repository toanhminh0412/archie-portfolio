import React, { useState } from "react";
import Header from "./Header";
import {auth} from "../App";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const updateEmail = e => {
        setEmail(e.target.value);
    }

    const updatePassword = e => {
        setPassword(e.target.value);
    }
    
    const login = async(e) => {
        e.preventDefault();
        await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            if(user) {
                window.localStorage.setItem('login', 'true');
                navigate('/edit');
            } else {
                setError('Invalid credentials. Please try again.')
            }
        })
        .catch(error => {
            setError('Invalid credentials. Please try again.')
        })
    }

    return (
    <div>
        <Header/>
        <div className='w-full h-screen bg-blue-900 relative'>
            <img src='img/welcomebg.jpg' alt='welcome background' className='h-full w-full'></img>
            <div className='absolute top-0 left-0 h-full w-full bg-black opacity-60'></div>
            <div className='absolute top-0 left-0 z-10 w-full h-full'>
                <h1 className='text-2xl md:text-4xl lg:text-6xl text-white font-medium h-fit w-fit mx-auto pt-24 md:pt-32'>Hello Archie, please login</h1>
                <p className='text-xl md:text-2xl lg:text-3xl text-red-500 font-light h-fit w-fit mx-auto mt-4'>{error}</p>
                <form className='flex flex-col w-fit h-fit mx-auto mt-8 md:mt-12' onSubmit={login}>
                    <input className='p-2 rounded-sm bg-slate-800 text-white w-72 lg:w-96 text-lg lg:text-xl' type='text' name='email' placeholder='Email' onChange={updateEmail}/>
                    <input className='p-2 rounded-sm bg-slate-800 text-white mt-4 md:mt-8 w-72 lg:w-96 text-lg lg:text-xl' type='password' name='Password' placeholder='password' onChange={updatePassword}/>
                    <input className='p-2 bg-green-900 hover:bg-green-700 text-white rounded-md w-24 ml-auto mt-8 md:mt-12' type='submit' value='Login'/>
                </form>
            </div>
        </div>
    </div>
    )
}