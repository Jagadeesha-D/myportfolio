import React from "react";
import { FaLinkedin, FaInstagram, FaGithub, FaTwitter, FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark-2 text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Contact Me</h5>

            <form className="row g-3">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                />
              </div>
              <div className="col-12">
                <textarea
                  className="form-control"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="col-12">
                <button type="submit" className="btn submit-btn btn-primary">
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
  <h5 className="text-uppercase">Social Media</h5>

  <ul className="list-unstyled d-flex icon-list  mb-0">
    <li><a className='footer-icon-links' href="https://www.linkedin.com/in/jagadeesha-d" target="_blank" rel="noopener noreferrer"><FaLinkedin /> </a></li>
    <li><a className='footer-icon-links' href="https://www.instagram.com/jaggu__d_k_s" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
    <li><a className='footer-icon-links' href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"><FaGithub /></a></li>
    <li><a className='footer-icon-links' href="https://www.instagram.com/jaggu__d_k_s" target="_blank" rel="noopener noreferrer"><FaTwitter /></a></li>
    <li><a className='footer-icon-links' href="https://www.instagram.com/jaggu__d_k_s" target="_blank" rel="noopener noreferrer"><FaFacebook /></a></li>
  </ul>
</div>


          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Quick Links</h5>

            <ul className="list-unstyled mb-0">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/projects">Projects</a>
              </li>
              <li>
                <a href="/skills">Skills</a>
              </li>
              <li>
                <a href="/about">About Me</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2022 My Portfolio        ||        Blood Group AB+
      </div>
    </footer>
  );
}

export default Footer;
