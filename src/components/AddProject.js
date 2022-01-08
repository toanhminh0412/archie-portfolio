import React, { useState } from "react";
import Header from "./Header";
import { db, storage } from '../App';
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Homepage from "./Homepage";

export default function AddProject() {
    const [name, setName] = useState('');
    const [link, setLink] = useState('');
    const [img, setImg] = useState(null);
    const [imgName, setImgName] = useState("")
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const login = window.localStorage.getItem('login');

    const updateName = e => {
        setName(e.target.value);
    }

    const updateLink = e => {
        setLink(e.target.value);
    }

    const updateImg = e => {
        if(e.target.files[0]) {
            setImg(e.target.files[0])
            let picName = e.target.files[0].name;
            setImgName(picName);
        }
    }

    const updateDescription = e => {
        setDescription(e.target.value);
    }

    const addProject = async(e) => {
        e.preventDefault();
        let projectImgRef = ref(storage, `projects/${imgName}`);
        await uploadBytes(projectImgRef, img).then((snapshot) => {
            console.log('upload image successfully')
        })
        .catch(error => {
            console.log(error);
            setError('Failed to add project image')
        })

        await getDownloadURL(projectImgRef)
            .then(async(url) => {
                const newProject = {
                    "name": name,
                    "img": url,
                    "url": link,
                    "description": description.split('/')[0],
                    "tools": description.split('/')[1],
                    "features": description.split('/')[2]
                }
        
                let projectId = "proj" + String(Date.now().valueOf());
                try {
                    await setDoc(doc(db, "projects", projectId), newProject);
                    navigate('/projects');
                } catch (error) {
                    console.log('Failed to add project');
                    setError('Failed to add project');
                }
            })
            .catch(error => {
                console.log(error)
                setError('Failed to get URL')
            })

    }

    if(login === "true") {
        return (
            <div >
                <Header/>
                <div className='w-full h-screen bg-blue-900 relative'>
                    <img src='img/welcomebg.jpg' alt='welcome background' className='h-full w-full'></img>
                    <div className='absolute top-0 left-0 h-full w-full bg-black opacity-60'></div>
                    <div className='absolute top-0 left-0 z-10 w-full h-full'>
                        <h1 className='text-2xl md:text-4xl lg:text-6xl text-white font-medium h-fit w-fit mx-auto pt-16 md:pt-20'>Add a project</h1>
                        <p className='text-xl md:text-2xl lg:text-3xl text-red-500 font-light h-fit w-fit mx-auto mt-4'>{error}</p>
                        <form className='flex flex-col w-fit h-fit mx-auto mt-8 md:mt-12' onSubmit={addProject}>
                            <input className='p-2 rounded-sm bg-slate-800 text-white w-72 lg:w-96 text-lg lg:text-xl mx-auto' type='text' name='name' placeholder='App name' onChange={updateName}/>
                            <input className='p-2 rounded-sm bg-slate-800 text-white mt-4 md:mt-8 w-72 lg:w-96 text-lg lg:text-xl mx-auto' type='text' name='link' placeholder='App link' onChange={updateLink}/>
                            <input className='text-white text-lg lg:text-xl p-2 mt-4 md:mt-8 mx-auto w-72 lg:w-96' type='file' name='img' onChange={updateImg}/>
                            <textarea className='p-2 rounded-sm bg-slate-800 text-white mt-4 md:mt-8 w-72 lg:w-96 h-40 text-lg lg:text-xl mx-auto' name='description' placeholder="App description" onChange={updateDescription}/>
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