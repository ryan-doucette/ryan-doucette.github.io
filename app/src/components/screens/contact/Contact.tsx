import React, {useRef, MutableRefObject, useState, useContext, useEffect} from 'react';
import copy from 'copy-to-clipboard';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import mailIcon from '../../../images/mail-icon.png';
import githubIcon from '../../../images/github-icon.png';
import linkedinIcon from '../../../images/linkedin-icon.png';
import './styles/_contact.scss';
import './transitions/_contactTransitions.scss';
import { leaveContactTransition } from './transitions/ContactTransitions';
import { CurrentScreenContext } from '../../../current-screen-context';
import { useNavigationType } from 'react-router-dom';

const Contact = () => {
  const form = useRef() as MutableRefObject<HTMLFormElement>;
  const screenContext = useContext(CurrentScreenContext);
  const [preventPopExit, setPreventPopExit] = useState(false);

  const navType = useNavigationType();

  useEffect(() => {
    if (navType === 'POP' && preventPopExit === false) {
      setPreventPopExit(true);
      return;
    }
    if (screenContext.currentScreen !== 'contact') {
      leaveContactTransition();
    }
  }, [navType, preventPopExit, screenContext]);

  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailnput] = useState('');
  const [messageInput, setMessageInput] = useState('');
  const validInput = nameInput !== '' && emailInput !== '' && messageInput !== '';
  const emailToCopy = 'doucette.ry@northeastern.edu';
  
  const handleCopyEmail = () => {
    copy(emailToCopy)
    toast("Email coppied to clipboard.");
  };

  const checkValidEmail = (email: string) => {
    // https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript
    return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  }

  const sendEmail = (e: any) => {
    console.log(checkValidEmail(emailInput));
    if (checkValidEmail(emailInput)) {
      e.preventDefault();

      emailjs.sendForm('service_q1tyh1j', 'template_w56wgdz', form.current, 'D5NkrUoF8woFcFdfW')
        .then((result) => {
          toast("Your message has been successfully sent!");
        }, (error) => {
            toast.error("There was a problem sending your message, please contact me directly instead. Sorry for the inconvenience.");
      });

      setNameInput('');
      setEmailnput('');
      setMessageInput('');
    }
    else {
      toast.error("Message not sent, must be a valid email.");
    }
  };

  return (
    <div className="contact">
      <ToastContainer 
        position="bottom-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
      />
      <div className='formContainer' id='contactContainer'>
        <div className='shadowContainer'>
          <section className='contactInfoContainer formSection infoText'>
            <div>
              <h2 className='sectionTitle'>Get in touch!</h2>
              <div className='infoDetails'>I love to collaborate. Please feel free to reach out through the form or any of my other outlets.</div>
            </div>
            <div className='infoIconContainer'>
              <div 
                onClick={() => {handleCopyEmail()}} 
                className='infoIcon'
                id='mailIcon' 
                style={{ backgroundImage:`url(${mailIcon})`}}
              >
                <div id='emailToCopy'>doucette.ry@northeastern.edu</div>
              </div>
              <a 
                href='https://github.com/ryan-doucette/'
                className='infoIcon' 
                id='githubIcon' 
                style={{ backgroundImage:`url(${githubIcon})`}}
                target="_blank"
                rel="noreferrer noopener"
              >
              </a>
              <a
                href='https://www.linkedin.com/in/ryan-doucette/'
                className='infoIcon'
                id='linkedInIcon'
                style={{ backgroundImage:`url(${linkedinIcon})`}}
                target="_blank"
                rel="noreferrer noopener"
              >
              </a>
            </div>
          </section>
          <section className='inputContainer formSection formText'>
            <h2 className='sectionTitle'>Contact me</h2>
            <form className='form formText' ref={form}>
              <label className='formTitle'>Name*</label>
              <input className='formText inputBox' value={nameInput} onChange={(e) => setNameInput(e.target.value)} type="text" name="name" />
              <label className='formTitle'>Email*</label>
              <input className='formText inputBox' value={emailInput} onChange={(e) => setEmailnput(e.target.value)} type="email" name="email" />
              <label className='formTitle'>Message*</label>
              <textarea className='formText inputBox' value={messageInput} onChange={(e) => setMessageInput(e.target.value)} name="message" />
              <input onClick={sendEmail} disabled={!validInput} className='formSubmitButton' id={!validInput ? 'buttonDisabled' : undefined} value="SEND" type='submit'/>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Contact;
