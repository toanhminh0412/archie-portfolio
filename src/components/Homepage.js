import React, {useRef} from "react";
import Footer from "./Footer";
import Header from "./Header";
import HomeAbout from "./HomeAbout";
import HomeContact from "./HomeContact";
import HomeProjects from "./HomeProjects";
import HomeSkills from "./HomeSkills";

export default function Homepage() {
    const contactRef = useRef();
    const contactButtonRef = useRef();

    const scrollToContact = (ref) => {
        console.log('this function is excuted')
        // console.log(ref.current.offsetTop);
        // window.scrollTo(0, ref.current.offsetTop);
        ref.current.scrollIntoView({behavior: "smooth", block:"center"});
    }

    return (
        <div>
            <Header reference={contactButtonRef} click={() => scrollToContact(contactRef)}/>
            <div className='h-screen relative'>
                <img src="img/welcomebg.jpg" alt='Welcome background' className='h-full w-full'/>
                <div className='absolute text-center h-screen flex flex-col justify-center left-0 right-0 mx-auto top-0'>
                    <p className='uppercase font-medium text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>XIN CHAO, TOI LA ARCHIE!!</p>
                    <p className='uppercase font-medium text-white text-2xl md:text-3xl lg:text-4xl lg:text-5xl'>(HELLO, I'M ARCHIE!!)</p>
                </div>
            </div>
            <HomeAbout />
            <HomeSkills />
            <HomeProjects />
            <HomeContact reference={contactRef}/>
            <Footer />
        </div>
    )
}