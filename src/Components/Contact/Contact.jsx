import React, { useRef } from 'react';
import './Contact.css';
import mail from '../../assets/mail-icon.png';
import call from '../../assets/call-icon.png';
import location from '../../assets/location-icon.png';

const Contact = () => {
  // Create a reference for the form
  const formRef = useRef(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "f7ea417f-9586-4b62-a4a2-6d11779d840d");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
      // Reset the form after successful submission
      if (formRef.current) {
        formRef.current.reset();
      }
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className='contact' id='connect'>
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-cont">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            I'm currently an undergraduate actively seeking internships and placement opportunities.
            If you have a project or position that fits my skills, feel free to reach out anytime!
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail} alt="Mail" />
              <p>snmorankar210603@gmail.com</p>
            </div>
            <div className="contact-detail size">
              <img src={call} alt="Call" />
              <p>+91- 7058058359</p>
            </div>
            <div className="contact-detail">
              <img src={location} alt="Location" />
              <p>Pune, Maharashtra, India</p>
            </div>
          </div>
        </div>
        {/* Attach the ref to the form */}
        <form onSubmit={onSubmit} className="contact-right" ref={formRef}>
          <label>Your Name</label>
          <input type="text" placeholder='Enter your name' name="name" required />
          <label>Your Email</label>
          <input type="email" placeholder='Enter your email' name="email" required />
          <label>Write your message here</label>
          <textarea name="message" rows="8" placeholder='Enter your message' required></textarea>
          <button type='submit' className='contact-submit'>Submit Now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
