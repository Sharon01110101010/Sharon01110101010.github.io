import React from 'react'
import './contact.css'
import {SiGmail} from 'react-icons/si'
import {MdOutlineEmail} from 'react-icons/md'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_sh07', 'template_reactportfolio', form.current, '6XdRCMhqYbvf-vBR_')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        e.target.reset()
      };

    return ( 
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <SiGmail className='contact__option-icon'/>   
                        <h4>Gmail</h4>
                        <h5>sharon071018@gmail.com</h5>
                        <a href="mailto: sharon071018@gmail.com" target='_blank'>Send a message </a>
                    </article>

                    <article className="contact__option" >
                        <MdOutlineEmail className='contact__option-icon'/>   
                        <h4>School email</h4>
                        <h5>swong21@earlham.edu</h5>
                        <a href="mailto: swong21@earlham.edu" target='_blank'>Send a message </a>
                    </article> 

                </div>
                {/* END OF CONTACTION OPTIONS */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' requried />
                    <input type="email" name='email' placeholder='Your email' requried />
                    <textarea name ="message" rows="7" placeholder='Your Message' requried></textarea>
                    <button type='submit' className='btn btn-primary'>Send a message </button>


                </form>
            </div>
        </section>
    )
}

export default Contact
