import React, { useState } from "react";
import Header from "./Header";
import { db } from "../App";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Homepage from "./Homepage";

export default function AddPost() {
    const [error, setError] = useState('');
    const [title, setTitle] = useState('');
    const [createdAt, setCreatedAt] = useState('')
    const [content, setContent] = useState('')
    const navigate = useNavigate();
    const login = window.localStorage.getItem('login');

    const updateTitle = e => {
        setTitle(e.target.value);
    }

    const updateCreatedAt = e => {
        setCreatedAt(e.target.value);
    }

    const updateContent = e => {
        setContent(e.target.value);
    }

    const addPost = async(e) => {
        e.preventDefault();
        const newPost = {
            "title": title,
            "createdAt": createdAt,
            "content": content
        }
        try {
            const postId = "post" + String(Date.now().valueOf());
            await setDoc(doc(db, "posts", postId), newPost);
            console.log('post successfully')
            navigate('/posts');
        } catch(error) {
            console.log(error);
            setError('Failed to post')
        }
    }

    if(login === "true") {
        return (
            <div >
                <Header/>
                <div className='w-full h-screen bg-blue-900 relative'>
                    <img src='img/welcomebg.jpg' alt='welcome background' className='h-full w-full'></img>
                    <div className='absolute top-0 left-0 h-full w-full bg-black opacity-60'></div>
                    <div className='absolute top-0 left-0 z-10 w-full h-full'>
                        <h1 className='text-2xl md:text-4xl lg:text-6xl text-white font-medium h-fit w-fit mx-auto pt-16 md:pt-20'>Add a post</h1>
                        <p className='text-xl md:text-2xl lg:text-3xl text-red-500 font-light h-fit w-fit mx-auto mt-4'>{error}</p>
                        <form className='flex flex-col w-fit h-fit mx-auto mt-8 md:mt-12' onSubmit={addPost}>
                            <input className='p-2 rounded-sm bg-slate-800 text-white w-72 lg:w-96 text-lg lg:text-xl mx-auto' type='text' name='title' placeholder='Title' onChange={updateTitle}/>
                            <input className='p-2 rounded-sm bg-slate-800 text-white mt-4 md:mt-8 w-72 lg:w-96 text-lg lg:text-xl mx-auto' type='text' name='createdAt' placeholder='Created on' onChange={updateCreatedAt}/>
                            <textarea className='p-2 rounded-sm bg-slate-800 text-white mt-4 md:mt-8 w-72 lg:w-96 h-40 text-lg lg:text-xl mx-auto' name='content' placeholder="Content" onChange={updateContent}/>
                            <input className='p-2 bg-green-900 hover:bg-green-700 text-white rounded-md w-24 ml-auto mt-8 md:mt-12' type='submit' value='Add'/>
                        </form>
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