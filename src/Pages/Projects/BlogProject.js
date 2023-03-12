import React from "react";

function BlogProject() {
  return (
    <div className="container mt-5">
      <h1 className="mb-5">BlogProject</h1>
      <div className="row">
        <div className="col-lg-8">
          <p>
            This is a web application that allows users to browse and purchase products online. The website has a modern and user-friendly design, which makes it easy for users to navigate and find what they are looking for.
          </p>
          <p>
            The website has a comprehensive shopping cart system, which allows users to add and remove products from their cart, as well as change the quantity of each item. The checkout process is secure and easy to use, and it supports multiple payment methods, such as credit card, PayPal, and Apple Pay.
          </p>
          <p>
            The website is built using a full-stack technology stack, which includes React for the front-end and Node.js and MongoDB for the back-end. The website is deployed on Heroku, which ensures that it is fast and reliable.
          </p>
        </div>
        <div className="col-lg-4">
          <img className="img-fluid" src="https://colorlib.com/wp/wp-content/uploads/sites/2/ezy-ecommerce-website-template.jpg" alt="E-commerce website screenshot" />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-lg-4">
          <img className="img-fluid" src="https://colorlib.com/wp/wp-content/uploads/sites/2/ezy-ecommerce-website-template.jpg" alt="E-commerce website screenshot" />
        </div>
        <div className="col-lg-4">
          <img className="img-fluid" src="https://colorlib.com/wp/wp-content/uploads/sites/2/ezy-ecommerce-website-template.jpg" alt="E-commerce website screenshot" />
        </div>
        <div className="col-lg-4">
          <img className="img-fluid" src="https://colorlib.com/wp/wp-content/uploads/sites/2/ezy-ecommerce-website-template.jpg" alt="E-commerce website screenshot" />
        </div>
      </div>
    </div>
  );
}

export default BlogProject;
