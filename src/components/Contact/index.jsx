import React from "react";

import Resume from "../Resume/";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact__text-ctr">
        <div className="contact__text-wrapper">
          <h2 className="contact__title">04.Contact Me</h2>
          <h3 className='form__text'>Have a question or want to work with me?</h3>
          <h3 className='form__text'>
            Send me an e-mail and I will get back to you at my earliest convenience
          </h3>
          <Resume />
        </div>
      </div>
      <form
        className="form"
        action="https://formspree.io/jcillo507@yahoo.com"
        method="POST"
      >
        <label className="form__label">Enter your e-mail address:</label>
        <input className="form__name" type="text" name="name" />
        <label className="form__label">Enter your message:</label>
        <textarea className="form__body" type="text" name="body" />
        <input className="form__submit" type="submit" name="submit" />
      </form>
    </section>
  );
};
export default Contact;
