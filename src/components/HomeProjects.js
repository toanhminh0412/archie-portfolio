import React from "react";
export default function HomeProjects() {

    return (
        <div className='bg-blue-900 pb-20'>
            <h1 className='pt-20 text-6xl lg:text-8xl text-white font-medium underline text-center'>Projects</h1>
            <div className='mt-12 lg:mt-20 flex flex-row flex-wrap'>
                <div className='mx-auto w-3/4 md:w-7/12 lg:w-4/12 bg-slate-800 rounded-md'>
                    <div className='w-full h-fit text-center'>
                        <a href='https://find-study-buddy.herokuapp.com/' target='_blank' rel="noopener noreferrer">
                            <img src='img/studybuddy.png' alt='studybuddy img' className='w-11/12 mx-auto pt-3 lg:pt-6'></img>
                        </a>
                    </div>
                    <div className='mx-4 lg:mx-6 mt-4 pb-4'>
                        <a href='https://find-study-buddy.herokuapp.com/' target='_blank' rel="noopener noreferrer"><h2 className='font-medium text-2xl lg:text-3xl text-white underline'>Study Buddy</h2></a>
                        <ul className='mt-4 font-extralight text-md lg:text-xl text-white'>
                            <li className='lg:text-lg xl:text-xl'>- Built with Reactjs, Nodejs, Firebase, styled with Tailwindcss</li>
                            <li className='mt-4 lg:text-lg xl:text-xl'>- A matchmaking application that helps students find a suitable study partner</li>
                        </ul>
                    </div>
                </div>

                <div className='mt-12 lg:mt-0 mx-auto w-3/4 md:w-7/12 lg:w-4/12 bg-slate-800 rounded-md'>
                    <div className='w-full h-fit text-center'>
                        <a href='https://morning-castle-13102.herokuapp.com/login' target='_blank' rel="noopener noreferrer">
                            <img src='img/archmedia.png' alt='studybuddy img' className='w-11/12 mx-auto pt-3 lg:pt-6'></img>
                        </a>
                    </div>
                    <div className='mx-4 lg:mx-6 mt-4 pb-4'>
                        <a href='https://morning-castle-13102.herokuapp.com/login' target='_blank' rel="noopener noreferrer">
                            <h2 className='font-medium text-2xl lg:text-3xl text-white underline'>ArchMedia</h2>
                        </a>
                        <ul className='mt-4 font-extralight text-md lg:text-xl text-white'>
                            <li className='lg:text-lg xl:text-xl'>- Built with Flask, styled with CSS</li>
                            <li className='mt-4 lg:text-lg xl:text-xl'>- A social media that allows user to have multiple user profiles</li>
                        </ul>
                    </div>
                </div>
            </div>
            <p className='mt-12 text-center text-xl lg:text-2xl text-white'>More projects: <a href='/projects' className='underline text-white text-xl lg:text-2xl cursor-pointer'>Here</a></p>
        </div>
    )
}