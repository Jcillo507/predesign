import React from 'react'

import './contact.scss'

const Contact = () => {
  return (
    <div className="contact-form" id='contact'>
      <h3 className="contact-text">
        Have a question or want to work with me?<br></br>
        Send me an e-mail and I will get back to you as fast as I can.
      </h3>
      {/* <ReactContactForm className='email' to="jcillo507@yahoo.com" buttonText='Submit' /> */}

      <form action="https://formspree.io/jcillo507@yahoo.com" method="POST">
        <label>
          Enter your e-mail address:<br></br>
          <input className="form-name" type="text" name="name" />
        </label>
        <br></br>
        <label>
          Enter your message:<br></br>
          <textarea className="form-body" type="text" name="body" />
        </label>
        <br></br>
        <input className="form-submit" type="submit" name="submit" />
      </form>
    </div>
  );
};
export default Contact