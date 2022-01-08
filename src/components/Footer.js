import React from "react";
import { SocialIcon } from 'react-social-icons';

export default function Footer() {
    return (
        <div className='w-full h-fit pb-6 bg-black flex flex-col justify-center'>
            <div className='flex flex-row w-fit mt-6 lg:mt-8 mx-auto'>
                <SocialIcon className='mr-6' url="https://github.com/toanhminh0412" style={{ color: "black"}} fgColor="white" target="_blank"/>
                <SocialIcon className='mr-6' url="https://www.linkedin.com/in/archie-to-75a4a81a2/" fgColor="white" target="_blank"/>
                <SocialIcon className='mr-6' url="https://www.instagram.com/archie.to.minh/" fgColor="white" target="_blank"/>
                <SocialIcon url="https://www.facebook.com/anhto.minh/" fgColor="white" target="_blank"/>
            </div>
            <p className='h-fit w-fit my-auto mx-auto text-white mt-4 lg:mt-8'>Copyright &copy; 2022 Archie To</p>
        </div>
    )
}