import React, {useEffect, useState} from "react";
import Header from "./Header";
import { db } from "../App";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";


export default function Projects() {
    const [projectList, setProjectList] = useState([]);
    const navigate = useNavigate();

    const toContact = () => {
        navigate('/contact')
    }

    useEffect(() => {
        const getProjects = async() => {
            const projectsSnapshot = await getDocs(collection(db, 'projects'));
            let projects = []
            projectsSnapshot.forEach(doc => {
                projects.push(doc.data());
            })
            setProjectList(projects);
        }
        getProjects();
        console.log(projectList);
    }, [])
    
    return (
        <div>
            <Header click={toContact}/>
            <div className='w-full h-full bg-blue-900'>
                <h1 className='text-4xl md:text-6xl lg:text-8xl text-white font-medium h-fit w-fit mx-auto pt-16 md:pt-20'>My projects</h1>
                <div className='pb-20 w-full lg:w-3/4 mx-auto flex flex-row flex-wrap'>
                    {projectList.map(project => 
                            (<div className='w-80 xl:w-96 mx-auto bg-slate-800 flex flex-col rounded-md mt-12' key={project.name}>
                                <div className='w-11/12 mx-auto mt-3'>
                                    <a href={project.url} target="_blank" rel="noopener noreferrer"><img className='w-full h-full' src={project.img} alt='project pic'></img></a>
                                </div>
                                <div className='mx-3 xl:mx-6 mt-5'>
                                <a href={project.url} target="_blank" rel="noopener noreferrer"><h1 className="text-white text-3xl xl:text-5xl font-bold hover:underline">{project.name}</h1></a>
                                    <ul className='mt-4'>
                                        <li className='text-white mb-4 font-extralight xl:text-lg'><span className='text-xl xl:text-2xl font-medium'>Functionality:</span> <br></br>{project.description}</li>
                                        <li className='text-white mb-4 font-extralight xl:text-lg'><span className='text-xl xl:text-2xl font-medium'>Tools:</span> <br></br>{project.tools}</li>
                                        <li className='text-white mb-4 font-extralight xl:text-lg'><span className='text-xl xl:text-2xl font-medium'>Main features:</span>  <br></br>{project.features}</li>
                                    </ul>
                                </div>
                            </div>)
                        
                    )}
                </div>
            </div>
        </div>
    )
}