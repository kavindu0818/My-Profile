import React, { useState } from 'react';
import Title from '../layouts/Title';
import ContactLeft from './ContactLeft';
import {hover} from "framer-motion";

const Contact = () => {
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  // ========== Email Validation start here ==============
  const emailValidation = () => {
    return String(email)
        .toLocaleLowerCase()
        .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };
  // ========== Email Validation end here ================

  const handleSend = (e) => {
    e.preventDefault();
    if (username === '') {
      setErrMsg('Username is required!');
    } else if (phoneNumber === '') {
      setErrMsg('Phone number is required!');
    } else if (email === '') {
      setErrMsg('Please give your Email!');
    } else if (!emailValidation(email)) {
      setErrMsg('Give a valid Email!');
    } else if (subject === '') {
      setErrMsg('Please give your Subject!');
    } else if (message === '') {
      setErrMsg('Message is required!');
    } else {
      setSuccessMsg(
          `Thank you dear ${username}, Your Messages has been sent Successfully!`
      );
      setErrMsg('');
      setUsername('');
      setPhoneNumber('');
      setEmail('');
      setSubject('');
      setMessage('');
    }
  };

  // const [isHovered, setIsHovered] = useState(false); // Initialize hover state to false

  const inputStyle = {
    width: '100%',
    height: '2.5rem',
    borderRadius: '0.5rem',
    borderBottom: '1px solid white',
    backgroundColor: '#191b1e',
    color: 'white',
    padding: '1rem',
    outline: 'none',
    borderColor: 'white', // Use isHovered state
    transition: 'border-color 0.3s ease', // Optional transition
  };


  return (
      <section
          id="contact"
          className="w-full min-h-screen flex flex-col lgl:flex-row items-center justify-between px-5 md:px-10 border-b border-white font-titleFont bg-[#191b1e] overflow-hidden pb-15"
      >
        <div className="w-full flex justify-center items-center text-center">
          <Title title="CONTACT" des="Contact With Me"/>
        </div>

        <div className="w-full relative flex flex-col lgl:flex-row justify-between items-start">
          {/* ContactLeft Section */}
          <div className="w-100  top-15 left-5 pb-10 relative lgl:w-[40%] shadow-10px 10px 19px #1c1e22 -10px -10px 19px #262a2e">
            <ContactLeft/>
          </div>

          {/* Form Section */}
          <div
              className="w-180 left-110 absolute top-15 lgl:w-[60%] bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-10px 10px 19px #1c1e22 -10px -10px 19px #262a2e">
            <form className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5">
              {errMsg && (
                  <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                    {errMsg}
                  </p>
              )}
              {successMsg && (
                  <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                    {successMsg}
                  </p>
              )}
              <div className="w-full lgl:w-1/2  flex flex-col gap-4">
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Your name
                  </p>
                  <input
                      onChange={(e) => setUsername(e.target.value)}
                      value={username}
                      style={{
                        ...inputStyle, // Apply base styles
                        ...(errMsg === 'Username is required!' && {outline: '2px solid #yourDesignColor'}), // Apply conditional style
                      }}
                      type="text"

                  />


                </div>
                <div className="w-full lgl:w-1/2  flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Phone Number
                  </p>
                  <input
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      value={phoneNumber}
                      style={{
                        ...inputStyle, // Apply base styles
                        ...(errMsg === 'Username is required!' && {outline: '2px solid dark-yellow'}), // Apply conditional style
                      }}
                      type="text"

                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Email
                </p>
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    style={{
                      ...inputStyle, // Apply base styles
                      ...(errMsg === 'Username is required!' && {outline: '2px solid #yourDesignColor'}), // Apply conditional style
                    }}
                    type="text"

                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Subject
                </p>
                <input
                    onChange={(e) => setSubject(e.target.value)}
                    value={subject}
                    style={{
                      ...inputStyle, // Apply base styles
                      ...(errMsg === 'Username is required!' && {outline: '2px solid #yourDesignColor'}), // Apply conditional style
                    }}
                    type="text"

                />
              </div>
              <div className="flex flex-col gap-4 ">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Message
                </p>
                <textarea
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    cols="30"
                    rows="8"
                    style={{
                      width: '100%',         // Example width
                      height: '8rem',        // Example height
                      padding: '0.5rem',     // Example padding
                      border: '1px solid white', // Set default white border
                      borderRadius: '0.25rem',  // Example border radius
                      backgroundColor: '#191b1e', // Example background color
                      color: 'white',       // Example text color
                      outline: 'none',
                      // Remove default outline
                      // Add more styles as needed
                    }}
                ></textarea>
              </div>
              <div className="w-full">
                <button
                    onClick={handleSend}
                    className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-yellow-400  border-transparent"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
  );
};

export default Contact;
