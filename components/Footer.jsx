"use client"
import React, { useState, useRef } from 'react';
import emailjs from "@emailjs/browser";

const Footer = () => {
  const [result, setResult] = useState(false);

  const form = useRef();

  const Result = () => {
    return <p>Thank You, your message has been successfully sent.</p>;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cy3bos6",
        "template_3wd7rr1",
        form.current,
        "user_XHF86IxgqPH6n4BmCRK2m"
      )

      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
    setResult(true);
  };





  return (

    <footer class="footer_wrapper mt-8  py-8  text-black flex justify-center drop-shadow-md bg-gray-50">
      <div class="container  ">
        <section class="page_section contact" id="contact">
          <div class="contact_section">
            <h2 class="text-2xl md:text-3xl  text-center mt-4 mb-12 font-sang font-medium">Contact Us for Bookings</h2>
          </div>
          <div className='mb-8 '>
           

            <form ref={form} onSubmit={sendEmail} class="form text-black  ">
              <div className='flex md:flex-row flex-col justify-center justify-items-center gap-2 mx-8 md:mx-32 lg:gap-4  '>
                <div>
                  <input class="input-text mb-4 p-2 w-full md:w-5/6 lg:w-full border   bg-zinc-50  border-gray-300 rounded" type="text" name="name" placeholder='Name' />
                  <input class="input-text mb-4 p-2 w-full md:w-5/6 lg:w-full border bg-zinc-50 border-gray-300 rounded" type="text" name="email" placeholder='Email' />
                  <input class="input-text mb-4 p-2 w-full md:w-5/6 lg:w-full border bg-zinc-50 border-gray-300 rounded" type="text" placeholder='Subject' />
                </div>
                <div className='text-center  md:w-1/2'>
                  <textarea class="input-text text-area  w-full mb-2 p-2  border bg-zinc-50 border-gray-300 rounded h-32 " cols="0" rows="" name="message" placeholder='Message'></textarea>
                  <button class="input-btn px-4 py-2 bg-gray-800  text-white rounded cursor-pointer font-ste hover:bg-black" type="submit" >Send Message</button>
                </div>
              </div>
            </form>

          </div>
          <div className=' flex flex-col items-center '>
            <h2 className='text-lg md:text-2xl lg:text-3xl'>Or else we are quite active on</h2>
            <ul class="flex  mt-5 ">
              <li><a href='https://www.instagram.com/shivam_photofarm' target='_blank' class="text-2xl lg:text-4xl mx-2 hover:text-[#E4405F] text-black"><i class="fab fa-instagram"></i></a></li>
              <li><a href='https://www.facebook.com/shivam.pandey.75286' target='_blank' class="text-2xl lg:text-4xl mx-2 hover:text-[#1877F2] text-black"><i class="fab fa-facebook"></i></a></li>
              <li><a href='https://wa.me/+918240668648' target='_blank' class="text-2xl lg:text-4xl mx-2 hover:text-[#25D366] text-black"><i class="fab fa-whatsapp"></i></a></li>
            </ul>
          </div>
          
        </section>
      </div>
    </footer>

  );
};

export default Footer;
