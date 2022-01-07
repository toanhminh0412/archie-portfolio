import React, { useState } from "react";

export default function HomeSkills() {
    const [htmlImg, setHtmlImg] = useState(false);
    const [cssImg, setCssImg] = useState(false);
    const [jsImg, setJsImg] = useState(false);
    const [reactImg, setReactImg] = useState(false);
    const [nodeImg, setNodeImg] = useState(false);
    const [pythonImg, setPythonImg] = useState(false);
    const [firebaseImg, setFirebaseImg] = useState(false);
    const [javaImg, setJavaImg] = useState(false);

    const hoverHtml = () => {
        if(htmlImg) {
            setHtmlImg(false);
        } else {
            setHtmlImg(true);
        }
    }

    const hoverCss = () => {
        if(cssImg) {
            setCssImg(false);
        } else {
            setCssImg(true);
        }
    }

    const hoverJs = () => {
        if(jsImg) {
            setJsImg(false);
        } else {
            setJsImg(true);
        }
    }

    const hoverReact = () => {
        if(reactImg) {
            setReactImg(false);
        } else {
            setReactImg(true);
        }
    }

    const hoverNode = () => {
        if(nodeImg) {
            setNodeImg(false);
        } else {
            setNodeImg(true);
        }
    }

    const hoverPython = () => {
        if(pythonImg) {
            setPythonImg(false);
        } else {
            setPythonImg(true);
        }
    }

    const hoverFirebase = () => {
        if(firebaseImg) {
            setFirebaseImg(false);
        } else {
            setFirebaseImg(true);
        }
    }

    const hoverJava = () => {
        if(javaImg) {
            setJavaImg(false);
        } else {
            setJavaImg(true);
        }
    }
    
    return (
        <div className='bg-indigo-800'>
            <h1 className='text-6xl lg:text-8xl font-medium underline pt-20 text-center text-white'>My Skills</h1>
            <div className='mt-12 lg:mt-20 xl:mx-20 flex flex-row flex-wrap'>
                <div onMouseEnter={hoverHtml} onMouseLeave={hoverHtml} className='w-1/2 md:w-1/3 lg:w-1/4 box-border bg-black relative'>
                    <img src="img/html.png" alt='html logo' className='h-full w-full z-0'></img>
                    {htmlImg ? <div></div> : (
                        <div>
                            <div className='absolute top-0 left-0 h-full w-full z-10 bg-black opacity-60'></div>
                            <p className='text-white z-20 absolute inset-0 mx-auto my-auto text-center text-xl h-fit font-light cursor-default'>1.5 year <br></br>experience</p>
                        </div>
                    )}

                </div>

                <div onMouseEnter={hoverCss} onMouseLeave={hoverCss} className='w-1/2 md:w-1/3 lg:w-1/4 box-border bg-black relative'>
                    <img src="img/css-3.png" alt='html logo' className='h-full w-full z-0'></img>
                    {cssImg ? <div></div> : (
                        <div>
                            <div className='absolute top-0 left-0 h-full w-full z-10 bg-black opacity-60'></div>
                            <p className='text-white z-20 absolute inset-0 mx-auto my-auto text-center text-xl h-fit font-light cursor-default'>1.5 year <br></br>experience</p>
                        </div>
                    )}

                </div>

                <div onMouseEnter={hoverJs} onMouseLeave={hoverJs} className='w-1/2 md:w-1/3 lg:w-1/4 box-border bg-black relative'>
                    <img src="img/javascript.png" alt='html logo' className='h-full w-full z-0'></img>
                    {jsImg ? <div></div> : (
                        <div>
                            <div className='absolute top-0 left-0 h-full w-full z-10 bg-black opacity-60'></div>
                            <p className='text-white z-20 absolute inset-0 mx-auto my-auto text-center text-xl h-fit font-light cursor-default'>1.5 year <br></br>experience</p>
                        </div>
                    )}

                </div>

                <div onMouseEnter={hoverReact} onMouseLeave={hoverReact} className='w-1/2 md:w-1/3 lg:w-1/4 box-border bg-black relative'>
                    <img src="img/react.png" alt='html logo' className='h-full w-full z-0'></img>
                    {reactImg ? <div></div> : (
                        <div>
                            <div className='absolute top-0 left-0 h-full w-full z-10 bg-black opacity-60'></div>
                            <p className='text-white z-20 absolute inset-0 mx-auto my-auto text-center text-xl h-fit font-light cursor-default'>1 year <br></br>experience</p>
                        </div>
                    )}

                </div>

                <div onMouseEnter={hoverNode} onMouseLeave={hoverNode} className='w-1/2 md:w-1/3 lg:w-1/4 box-border bg-black relative'>
                    <img src="img/node.png" alt='html logo' className='h-full w-full z-0'></img>
                    {nodeImg ? <div></div> : (
                        <div>
                            <div className='absolute top-0 left-0 h-full w-full z-10 bg-black opacity-60'></div>
                            <p className='text-white z-20 absolute inset-0 mx-auto my-auto text-center text-xl h-fit font-light cursor-default'>1 year <br></br>experience</p>
                        </div>
                    )}

                </div>

                <div onMouseEnter={hoverPython} onMouseLeave={hoverPython} className='w-1/2 md:w-1/3 lg:w-1/4 box-border bg-black relative'>
                    <img src="img/python.png" alt='html logo' className='h-full w-full z-0'></img>
                    {pythonImg ? <div></div> : (
                        <div>
                            <div className='absolute top-0 left-0 h-full w-full z-10 bg-black opacity-60'></div>
                            <p className='text-white z-20 absolute inset-0 mx-auto my-auto text-center text-xl h-fit font-light cursor-default'>2 year <br></br>experience</p>
                        </div>
                    )}

                </div>

                <div onMouseEnter={hoverFirebase} onMouseLeave={hoverFirebase} className='w-1/2 md:w-1/3 lg:w-1/4 box-border bg-black relative'>
                    <img src="img/firebase.png" alt='html logo' className='h-full w-full z-0'></img>
                    {firebaseImg ? <div></div> : (
                        <div>
                            <div className='absolute top-0 left-0 h-full w-full z-10 bg-black opacity-60'></div>
                            <p className='text-white z-20 absolute inset-0 mx-auto my-auto text-center text-xl h-fit font-light cursor-default'>1 month <br></br>experience</p>
                        </div>
                    )}

                </div>

                <div onMouseEnter={hoverJava} onMouseLeave={hoverJava} className='w-1/2 md:w-1/3 lg:w-1/4 box-border bg-black relative'>
                    <img src="img/java.png" alt='html logo' className='h-full w-full z-0'></img>
                    {javaImg ? <div></div> : (
                        <div>
                            <div className='absolute top-0 left-0 h-full w-full z-10 bg-black opacity-60'></div>
                            <p className='text-white z-20 absolute inset-0 mx-auto my-auto text-center text-xl h-fit font-light cursor-default'>1 year experience <br></br> (haven't used for a while)</p>
                        </div>
                    )}

                </div>


            </div>

                <div className='pt-20 mx-2 pb-20 bg-blue-900'>
                    <h1 className='text-white text-6xl lg:text-8xl font-medium text-center underline'>Capabilities</h1>
                        <ul className='text-white mt-12 font-extralight text-center cursor-default'>
                            <li className='lg:text-xl'>1. Design <span className='lg:text-xl font-bold'>frontends</span> for websites and web applications (HTML, CSS, Javascript, React)</li>
                            <li className="mt-4 lg:text-xl">2. Build <span className='lg:text-xl font-bold'>databases</span> for applications (Flask, Django with Python, Nodejs, Firebase)</li>
                            <li className="mt-4 lg:text-xl">3. Build <span className='lg:text-xl font-bold'>interaction</span> between frontends and backends (Node js, React)</li>
                            <li className="mt-4 lg:text-xl">4. Implement <span className='lg:text-xl font-bold'>operations</span> for frondends to make changes in backends and vice versa</li>
                            <li className="mt-4 lg:text-xl">5. Build <span className='lg:text-xl font-bold'>real time</span> applications and APIs (Chat system is an example)</li>
                        </ul>
                </div>

                <div className='pt-20 bg-indigo-800 mx-2 md:mx-4 lg:mx-8 pb-20'>
                    <h1 className='text-white text-6xl lg:text-8xl font-medium text-center underline'>Soft skills</h1>
                    <ul className='text-white mt-12 font-extralight text-center cursor-default'>
                        <li className='lg:text-xl'>1. <span className='font-bold lg:text-xl'>Ability to learn</span>: I can learn tools fast and be able to use them quickly by reading documentations</li>
                        <li className="mt-4 lg:text-xl">2. <span className='font-bold lg:text-xl'>Problem solving</span>: I have basic knowledge in data structure and algorithms (I took and had great scores in the related courses)</li>
                        <li className="mt-4 lg:text-xl">3. <span className='font-bold lg:text-xl'>Know how to find answers</span>: I can use Google and Stack Overflow well when I'm stuck on a problem</li>
                        <li className="mt-4 lg:text-xl">4. <span className='font-bold lg:text-xl'>Teamwork</span>: I can work well in teams. I'm good at communication and always make great contributions to my team's goals</li>
                        <li className="mt-4 lg:text-xl">5. <span className='font-bold lg:text-xl'>Eager to learn and develop</span>: Not really a soft skill, but I'm always up for challenges and grow as a developer</li>
                    </ul>
                </div>
        </div>
    )
}