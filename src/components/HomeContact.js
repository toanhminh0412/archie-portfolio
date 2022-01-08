import { doc, setDoc } from 'firebase/firestore';
import React, {useState} from 'react';
import {db} from '../App';

export default function HomeContact({reference}) {
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [content, setContent] = useState("");

    const updateName = e => {
        setName(e.target.value);
    }

    const updateContact = e => {
        setContact(e.target.value);
    }

    const updateContent = e => {
        setContent(e.target.value);
    }

    const submitContact = async(e) => {
        e.preventDefault();
        const contactForm = {
        'name': name,
        'contact': contact,
        'content': content
        }
        let formId = "contact" + String(Date.now().valueOf());
        try {
            await setDoc(doc(db, "contacts", formId), contactForm);
            setName("");
            setContact("");
            setContent("");
            console.log("Contact sucessful");
        } catch (error) {
            console.log("Contact failed");
        }
    }

    return (
        <div className='h-screen w-full relative'>
            <img src="img/contact.jpg" alt='contact img' className='h-full w-full'/>
            <div className='absolute top-0 left-0 bg-black opacity-70 h-full w-full'></div>
            <h1 className='w-fit text-center text-white absolute z-10 inset-x-0 mx-auto top-16 lg:top-24 font-medium text-4xl lg:text-6xl'>Contact me</h1>
            <form ref={reference} className='absolute inset-x-0 mx-auto top-40 lg:top-60 z-10 flex flex-col flex-wrap w-3/4 lg:w-1/2 h-fit' onSubmit={submitContact}>
                    <input className='mb-8 p-2 bg-slate-800 border border-white text-white rounded-sm' type='text' name='name' placeholder='How can I address you?' value={name} onChange={updateName}/>
                    <input className='mb-8 p-2 bg-slate-800 border border-white text-white rounded-sm' type='text' name='contact' placeholder='How can I contact you?' value={contact} onChange={updateContact}/>
                    <textarea className='h-24 lg:h-32 p-2 mb-8 bg-slate-800 border border-white text-white rounded-sm' name='content' placeholder='Content' value={content} onChange={updateContent}/>
                    <input className='p-2 bg-green-900 hover:bg-green-700 text-white rounded-md w-24 ml-auto' type='submit' value='Send'/>
            </form>
        </div>
    )
}