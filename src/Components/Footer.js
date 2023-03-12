import React from 'react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Contact Me</h5>

            <form className="row g-3">
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="Name" />
              </div>
              <div className="col-md-6">
                <input type="email" className="form-control" placeholder="Email Address" />
              </div>
              <div className="col-12">
                <textarea className="form-control" placeholder="Message"></textarea>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary">Send Message</button>
              </div>
            </form>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Social Media</h5>

            <ul className="list-unstyled mb-0">
              <li><a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer"><FaLinkedin /> LinkedIn</a></li>
              <li><a href="https://www.instagram.com/your-instagram-profile" target="_blank" rel="noopener noreferrer"><FaInstagram /> Instagram</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Quick Links</h5>

            <ul className="list-unstyled mb-0">
              <li><a href="/">Home</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/skills">Skills</a></li>
              <li><a href="/about">About Me</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 My Portfolio | Built with React
      </div>
    </footer>
  );
}

export default Footer;
