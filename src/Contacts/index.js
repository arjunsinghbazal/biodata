import React, { useRef } from 'react';
import emailjs from 'emailjs-com'; 
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles.css'; // Make sure this path is correct based on your project structure

function Contacts() {
  const formRef = useRef();
  const serviceId = "service_4z3ecok";
  const templateId =  "template_8uopsun"
  const apiKey = "y4okR21pdpz6e2cHu";

  const sendMail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, formRef.current, apiKey)
      .then((result) => {
        console.log(result.text);
        showToast('Message Sent Successfully!', 'success');
      })
      .catch((error) => {
        console.error(error);
        showToast('Something went wrong!', 'error');
      });

    e.target.reset();
  };

  const showToast = (message, type) => {
    toast(message, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
      type: type,
    });
  };

  return (
    <div className="contactContainer">
      <motion.h2
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="contactHeading"
      >
        Get in Touch<span>.</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="contactPara"
      >
       Let's Start a Conversation
      </motion.p>

      <form ref={formRef} onSubmit={sendMail} className="formControl">
        <FormInput
          placeholder="Your Name"
          name="Sender_name"
          type="text"
          delay={0}
        />
        <FormInput
          placeholder="Your E-mail"
          name="Sender_email"
          type="email"
          delay={0.2}
        />
        <FormInput
          placeholder="Subject"
          name="Subject"
          type="text"
          delay={0.4}
        />
        <motion.textarea
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          placeholder="Message"
          name="message"
          cols={40}
          rows={10}
        />
        <FormButton label="Send Email" delay={0.7} />
      </form>
    </div>
  );
}

// A reusable input field with animations
function FormInput({ placeholder, name, type, delay }) {
  return (
    <motion.input
      initial={{ opacity: 0, x: -80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      type={type}
      placeholder={placeholder}
      name={name}
      required
    />
  );
}

// A reusable button with animations
function FormButton({ label, delay }) {
  return (
    <motion.button
      initial={{ opacity: 0, x: -80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      type="submit"
    >
      {label}
    </motion.button>
  );
}

export default Contacts;
