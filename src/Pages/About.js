import React from "react";
import myPhoto from "./my-photo.png";
import "./About.css";
const About = () => {
  return (
    <div className="about-container">
      <div style={{ float: "right" }}>
        <img
          className="about-photo"
          src={myPhoto}
          alt="Your Name"
          style={{ width: "200px", height: "200px", borderRadius: "50%" }}
        />
      </div>
      <div className="about-content">
      <h1>Jagadeesha D</h1>
      <p>Full stack---Mulesoft</p>
      
      <p>
        As a Full Stack and Mulesoft Developer based in Kochi, I possess a
        broad range of skills in both frontend and backend development. I'm
        passionate about designing and developing web applications and
        integration solutions that are efficient, reliable, and exceed
        expectations. With a keen eye for detail and natural problem-solving
        skills, I am always looking for new challenges and opportunities to
        expand my skillset.</p><p> In my work as a Full Stack Developer, I specialize
        in creating responsive and user-friendly web applications that are
        optimized for performance and speed. From writing clean, efficient code
        to optimizing website architecture, I'm committed to delivering
        top-quality work that meets and exceeds client expectations. My
        experience in Mulesoft development has given me a deep understanding of
        API-led connectivity and enterprise integration, which enables me to
        create efficient and reliable integrations that help organizations
        streamline their operations and improve productivity.</p><p>  When I'm not
        coding, you can find me indulging in my love of hiking or spending time
        with my family. I believe in maintaining a healthy work-life balance and
        am dedicated to pursuing my passions outside of work. Whether I'm
        developing complex web applications or creating robust integration
        solutions, I'm always eager to collaborate with positive, like-minded
        individuals who share my passion for technology and innovation.
      </p>
      </div>
    </div>
  );
};

export default About;
