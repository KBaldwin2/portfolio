import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Modal from './UI/Modal';
import classes from './ContactMe.module.css';


const ContactMe = (props) => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    props.onClick();

    emailjs.sendForm('service_h9a67tx', 'template_8g6b4is', form.current, 'WGKhTkKbiY4K3wacF')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      
  };


  return (
    <Modal onClick={props.onClick}>
      <p className={classes.email}>kimberleythuyne@gmail.com</p>
      <h1 className={classes.title}>Contact Me.</h1>
    <form ref={form} onSubmit={sendEmail} className={classes.form}>
      <label>Email:</label>
      <input type="email" name="user_email" required/>
      <div className={classes.container}>
      <label>Message</label>
      <textarea name="message" required/>
      </div>
      <input type="submit" value="Send" className={classes.button}/>
    </form>
    
    </Modal>
  );
};

export default ContactMe;