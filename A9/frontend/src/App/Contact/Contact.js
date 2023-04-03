import React from 'react';
import Navbar from '../Navbar/Navbar';
const Contact = () => {
  return (
    
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      <Navbar />
    <div class="contact-form">
        <div class="cards">
          <div class="card-body">
            <h5 class="card-title">Contact US</h5>
            <p class="card-text">
              Contact us for queries and questions regarding courses and job
              opportunities.
            </p>
            <a href="mailto:kale.v@northeastern.edu" class="btn btn-danger">
              Email Us
            </a>
          </div>
        </div>
      </div>
      </div>
  );
}
export default Contact;


