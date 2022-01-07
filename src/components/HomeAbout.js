import React from "react";

export default function HomeAbout() {
    return (
        <div className='h-fit pb-20 bg-blue-900'>
            <h1 className='ml-2 pt-12 text-6xl lg:text-8xl text-white font-medium underline text-center'>About</h1>
            <div className='mt-12 mx-2 sm:mx-4 md:mx-12 lg:mx-24 xl:mx-40'>
                <p className='text-center text-white font-light text-lg leading-8 lg:text-xl lg:leading-10'>Hello everyone. My name is Archie. I'm a third year Computer Science in university of Victoria, Canada. I focus on <span className="font-bold text-lg leading-8 lg:text-xl">web application development</span>. I've been programming for 3 years. Most of my programing experience come from doing school works and personal projects. My goal is to become the best developer as I can be. I'm always excited to deal with new challenges and grow during the process.</p>
            </div>
        </div>
    )
}