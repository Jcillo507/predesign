import React from "react";

import Resume from '../Resume/'

const Contact = () => {
  return (
    <div className="contact-form" id="contact">
      <h2 className="contact-title">Contact Me</h2>
      <Resume className='contact-text'/>
      <h3 className="contact-text">Have a question or want to work with me?</h3>
      <h3 className="contact-text">
        Send me an e-mail and I will get back to you as fast as I can.
      </h3>
      <form
        className="form-ctr"
        action="https://formspree.io/jcillo507@yahoo.com"
        method="POST"
      >
        <label className="form-label">
          Enter your e-mail address:
          <br />
          <input className="form-name" type="text" name="name" />
        </label>
        <br />
        <br />
        <label className="form-label">
          Enter your message:
          <br />
          <textarea className="form-body" type="text" name="body" />
        </label>
        <br />
        <input className="form-submit" type="submit" name="submit" />
      </form>
    </div>
  );
};
export default Contact;
