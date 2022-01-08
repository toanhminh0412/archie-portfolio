import React, { useEffect, useState } from "react";
import Header from "./Header";
import { db } from "../App";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function Posts() {
    const [postList, setPostList] = useState([])
    const navigate = useNavigate();

    const toContact = () => {
        navigate('/contact')
    }
    
    useEffect(() => {
        const getPosts = async() => {
            const postsSnap = await getDocs(collection(db, "posts"));
            let posts = []
            postsSnap.forEach(post => {
                posts.push(post.data());
            })
            setPostList(posts);
        }
        getPosts();
    }, [])

    if (postList.length === 0) {
        return (
            <div>
                <Header click={toContact}/>
                <div className='h-screen w-full relative'>
                    <img src='img/welcomebg.jpg' alt='welcome background' className='h-full w-full'/>
                    <div className='h-full w-full absolute bg-black opacity-60 top-0 left-0'></div>
                    <h1 className='text-6xl lg:text-8xl text-white font-medium absolute inset-0 my-auto mx-auto h-fit w-fit'>No posts found</h1>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <Header click={toContact}/>
                <div className='w-full h-full bg-blue-900'>
                <h1 className='text-4xl md:text-6xl lg:text-8xl text-white font-medium h-fit w-fit mx-auto pt-16 md:pt-20'>My posts</h1>
                    <div className='pb-20 w-full lg:w-3/4 xl:w-1/2 mx-auto flex flex-col flex-wrap'>
                        {postList.map(post => (
                            <div className='mt-12 p-4 bg-slate-800 rounded-md' key={post.title}>
                                <h1 className='text-white text-2xl lg:text-4xl font-medium'>{post.title}</h1>
                                <p className='text-white text-md lg:text-lg font-thin'>{post.createdAt}</p>
                                <p className='mt-4 text-white text-lg font-light'>{post.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
    
}