import React, { useEffect, useState } from "react";
import Header from "./Header";
import { db } from "../App";
import { collection, getDocs } from "firebase/firestore";

export default function Message() {
    const [messageList, setMessageList] = useState([])
    
    useEffect(() => {
        const getMessages = async() => {
            const messagesSnap = await getDocs(collection(db, "contacts"));
            let messages = []
            messagesSnap.forEach(post => {
                messages.push(post.data());
            })
            setMessageList(messages);
        }
        getMessages();
    }, [])

    if (messageList.length === 0) {
        return (
            <div>
                <Header />
                <div className='h-screen w-full relative'>
                    <img src='img/welcomebg.jpg' alt='welcome background' className='h-full w-full'/>
                    <div className='h-full w-full absolute bg-black opacity-60 top-0 left-0'></div>
                    <h1 className='text-6xl lg:text-8xl text-white font-medium absolute inset-0 my-auto mx-auto h-fit w-fit'>No message found</h1>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <Header />
                <div className='w-full h-full bg-blue-900'>
                <h1 className='text-4xl md:text-6xl lg:text-8xl text-white font-medium h-fit w-fit mx-auto pt-16 md:pt-20'>My messages</h1>
                    <div className='pb-20 w-full md:w-3/4 xl:w-1/2 mx-auto flex flex-col flex-wrap'>
                        {messageList.map(message => (
                            <div className='mt-12 p-4 bg-slate-800 rounded-md' key={message.contact}>
                                <h1 className='text-white text-2xl lg:text-4xl font-medium'>{message.name}</h1>
                                <p className='text-white text-md lg:text-lg font-thin'>{message.contact}</p>
                                <p className='mt-4 text-white text-lg font-light'>{message.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
    
}