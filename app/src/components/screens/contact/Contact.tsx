import React, {useRef, MutableRefObject, useState} from 'react';
import copy from 'copy-to-clipboard';
// import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import mailIcon from '../../../images/mail-icon.png';
import githubIcon from '../../../images/github-icon.png';
import linkedinIcon from '../../../images/linkedin-icon.png';
import './styles/_contact.scss';

const Contact = () => {
  const form = useRef() as MutableRefObject<HTMLFormElement>;

  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailnput] = useState('');
  const [messageInput, setMessageInput] = useState('');
  const validInput = nameInput !== '' && emailInput !== '' && messageInput !== '';
  const emailToCopy = 'doucette.ry@northeastern.edu';
  
  const handleCopyEmail = () => {
    copy(emailToCopy)
    toast("Email coppied to clipboard.");
  };

  const sendEmail = (e: any) => {
    e.preventDefault();
    toast("Your message has been successfully sent!");

    // emailjs.sendForm('service_q1tyh1j', 'template_w56wgdz', form.current, 'D5NkrUoF8woFcFdfW')
    //   .then((result) => {
    //       console.log(result.text);
    //   }, (error) => {
    //       console.log(error.text);
    //   });

      setNameInput('');
      setEmailnput('');
      setMessageInput('');
  };

  return (
    <div className="contact">
      <ToastContainer 
        position="bottom-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
      />
      <div className='formContainer'>
        <div className='shadowContainer'>
          <section className='contactInfoContainer formSection infoText'>
            <h2 className='sectionTitle'>Get in touch!</h2>
            <div className='infoDetails'>I love to collaborate. Please feel free to reach out through the form or any of my other outlets.</div>
            <div className='infoIconContainer'>
              <div 
                onClick={() => {handleCopyEmail()}} 
                className='infoIcon' 
                style={{ backgroundImage:`url(${mailIcon})`}}
              >
                <div id='emailToCopy'>doucette.ry@northeastern.edu</div>
              </div>
              <a href='https://github.com/ryan-doucette/' className='infoIcon' style={{ backgroundImage:`url(${githubIcon})`}}> </a>
              <a href='https://www.linkedin.com/in/ryan-doucette/' className='infoIcon' style={{ backgroundImage:`url(${linkedinIcon})`}}> </a>
            </div>
          </section>
          <section className='inputContainer formSection formText'>
            <h2 className='sectionTitle'>Contact me</h2>
            <form className='form formText' ref={form} onSubmit={sendEmail}>
              <label className='formTitle'>Name*</label>
              <input className='formText inputBox' value={nameInput} onChange={(e) => setNameInput(e.target.value)} type="text" name="name" />
              <label className='formTitle'>Email*</label>
              <input className='formText inputBox' value={emailInput} onChange={(e) => setEmailnput(e.target.value)} type="email" name="email" />
              <label className='formTitle'>Message*</label>
              <textarea className='formText inputBox' value={messageInput} onChange={(e) => setMessageInput(e.target.value)} name="message" />
              <input disabled={!validInput} className='formSubmitButton' id={!validInput ? 'buttonDisabled' : undefined} type="submit" value="SUBMIT" />
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Contact;
