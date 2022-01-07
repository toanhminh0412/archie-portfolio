import React from "react";
import Header from "./Header";
import Homepage from "./Homepage";

export default function Edit() {
    const login = window.localStorage.getItem('login');

    if (login === "true") {
        return (
            <div>
                <Header/>
                <div className='w-full h-screen bg-blue-900 relative'>
                    <img src='img/welcomebg.jpg' alt='welcome background' className='h-full w-full'></img>
                    <div className='absolute top-0 left-0 h-full w-full bg-black opacity-60'></div>
                    <div className='absolute left-0 top-0 h-full w-full z-10'>
                        <div className='w-fit h-fit mx-auto pt-40 md:pt-60 xl:pt-52'>
                            <a href='/add-project'><h1 className='text-4xl md:text-5xl lg:text-6xl xl:text-8xl text-white cursor-pointer font-extralight hover:font-bold'>+ Add a project</h1></a>
                        </div>
    
                        <div className='w-fit h-fit mx-auto mt-12 md:mt-16 xl:mt-20'>
                            <a href='/add-post'><h1 className='text-4xl md:text-5xl lg:text-6xl xl:text-8xl text-white cursor-pointer font-extralight hover:font-bold'>+ Add a post</h1></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <Homepage/>
        )
    }
}