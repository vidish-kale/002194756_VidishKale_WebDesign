import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Container, Accordion, Button } from 'react-bootstrap';
import jobListings from './jobListings';

const Job = () => {
  return (
    
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      <Navbar />
      <Container>
        <h1 className='text-center py-3'>Job Listings</h1>
        <Accordion>
          {
            jobListings.map((item, idx) => <Accordion.Item key={idx} eventKey={idx}>
              <Accordion.Header>
                <strong>
                  {item.title}
                </strong>
              </Accordion.Header>
              <Accordion.Body>
                <p>{item.body}</p>
                <Button className='btn btn-warning'>Apply</Button>
              </Accordion.Body>
            </Accordion.Item>)
          }
        </Accordion>

      </Container>
    </div>
  );
}
export default Job;