import React from "react";

function SocialMediaPlatform() {
  return (
    <div className="container mt-5">
      <h1>Social Media Platform</h1>
      <p>
        This is a web application that allows users to connect with each other
        and share content. Users can create a profile, follow other users, post
        updates, like and comment on posts, and send direct messages. The
        platform also includes a search functionality to find other users or
        specific content.
      </p>
      <p>
        The project uses a full-stack approach, with a Node.js backend and a
        React frontend. The backend is built with Express.js and MongoDB for data
        storage. Authentication is implemented using JSON Web Tokens (JWT).
        Frontend design is implemented with Bootstrap and custom CSS. Axios is
        used for API requests and socket.io for real-time messaging.
      </p>
      <div className="row">
        <div className="col-lg-4 mb-4">
          <img
            src="https://via.placeholder.com/300x200.png?text=Image+1"
            alt="project screenshot"
            className="img-fluid"
          />
        </div>
        <div className="col-lg-4 mb-4">
          <img
            src="https://via.placeholder.com/300x200.png?text=Image+2"
            alt="project screenshot"
            className="img-fluid"
          />
        </div>
        <div className="col-lg-4 mb-4">
          <img
            src="https://via.placeholder.com/300x200.png?text=Image+3"
            alt="project screenshot"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
}

export default SocialMediaPlatform;
