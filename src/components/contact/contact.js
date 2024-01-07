import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();
    const [sendSuccessState, setSendSuccessState] = useState(false);
    const [emailCooldownState, setEmailCooldownState] = useState(0);
    const [nameErrorState, setNameErrorState] = useState(false);
    const [emailErrorState, setEmailErrorState] = useState(false);
    const [messageErrorState, setMessageErrorState] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        const lastEmailTimestamp = JSON.parse(localStorage.getItem('last-email-timestamp'));

        if (lastEmailTimestamp !== null && Date.now() - lastEmailTimestamp < 30000) {
            setEmailCooldownState(30000 - (Date.now() - lastEmailTimestamp));
            setSendSuccessState(false);

            setTimeout(() => {
                setEmailCooldownState(0);
            }, 3000);

            return;
        }

        const nameInvalid = form.current.from_name.value !== null && form.current.from_name.value.match(/^ *$/) === null;
        const emailInvalid = form.current.from_email.value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) !== null;
        const messageInvalid = form.current.message.value !== null && form.current.message.value.match(/^ *$/) === null;

        setNameErrorState(!nameInvalid);
        setEmailErrorState(!emailInvalid);
        setMessageErrorState(!messageInvalid);

        if (!nameInvalid || !emailInvalid || !messageInvalid) return;

        if (process.env.NODE_ENV === "development") {
            setEmailCooldownState(0);
            setSendSuccessState(true);
            localStorage.setItem('last-email-timestamp', JSON.stringify(Date.now()));
            e.target.reset();
            return;
        }
        
        emailjs.sendForm('service_j6fsulj', 'template_iewmf7i', form.current, 'VCvekM1fwWpJQOPj-')
        .then((result) => {
            console.log(result.text);
            setEmailCooldownState(0);
            setSendSuccessState(true);
            localStorage.setItem('last-email-timestamp', JSON.stringify(Date.now()));
            e.target.reset();
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <section id="contact-section" className="flex flex-col justify-center align-middle bg-white dark:bg-[#23262F] h-auto">
            <form ref={form} onSubmit={sendEmail} className="flex flex-col w-[60%] justify-center align-middle mx-auto mt-10">
                <label className="mt-4 font-poppins text-gray-900 dark:text-white">Name</label>
                <input type="text" name="from_name" className="bg-gray-300 dark:bg-gray-700"/>
                <span className={`mt-1 text-xs text-red-500 font-poppins italic ${nameErrorState ? "block" : "hidden"}`}>Enter a name</span>
                <label className="mt-4 font-poppins text-gray-900 dark:text-white">Email</label>
                <input type="text" name="from_email" className="bg-gray-300 dark:bg-gray-700"/>
                <span className={`mt-1 text-xs text-red-500 font-poppins italic ${emailErrorState ? "block" : "hidden"}`}>Enter a valid email</span>
                <label className="mt-4 font-poppins text-gray-900 dark:text-white">Message</label>
                <textarea name="message" className="bg-gray-300 dark:bg-gray-700 h-40"/>
                <span className={`mt-1 text-xs text-red-500 font-poppins italic ${messageErrorState ? "block" : "hidden"}`}>Enter a message</span>
                <input type="submit" value="Send" className="bg-blue-500 text-white rounded-lg mt-10 w-40 h-10 cursor-pointer mx-auto font-poppins text-xl"/>
            </form>
            <span className={`text-red-500 font-poppins mx-auto mt-3 mb-5 ${(emailCooldownState !== 0) ? "block" : "hidden"}`}>Please wait {Math.floor(emailCooldownState / 1000)} second{} before sending again</span>
            <span className={`text-green-500 font-poppins mx-auto mt-3 mb-5 ${sendSuccessState ? "block" : "hidden"}`}>Message successfully sent!</span>
        </section>
    )
}