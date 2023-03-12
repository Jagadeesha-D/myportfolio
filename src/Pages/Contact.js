import React, { useState } from 'react';
import '../contact.css';

function Contact() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    // validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError(true);
      return;
    }

    // send email, phone, and message data to server
    console.log(`Email: ${email}, Phone: ${phone}, Message: ${message}`);

    // clear form fields
    setEmail('');
    setPhone('');
    setMessage('');

    // show success message
    alert('Thank you for contacting us!');
  }

  return (
    <div className="container-contact">
      <h1 className="text-center mb-5">Contact Us</h1>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email address:</label>
              <input
                type="email"
                className={`form-control ${emailError ? 'is-invalid' : ''}`}
                id="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {emailError && <div className="invalid-feedback">Invalid email address</div>}
            </div>
            <div className="form-group">
              <label htmlFor="phone">Contact number:</label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                placeholder="Enter contact number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                className="form-control"
                id="message"
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
