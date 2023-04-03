import React from 'react';
import Navbar from '../Navbar/Navbar';
import northeasternLogo from './myhc_306912.jpg';

const Home = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', backgroundColor: 'lightgray' }}>
      <Navbar />
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '1000%' }}>
        <div className="container px-4 px-lg-5" style={{ width: '80%', margin: '0 auto', backgroundColor: 'white', padding: '20px' }}>
          <img src={northeasternLogo} alt="Northeastern University logo" style={{ maxWidth: '100%' }} />
          <h2 className="font-weight-light" style={{ color: '#CC0000' }}>Northeastern University, Boston</h2>
          <p style={{ color: '#333333' }}>
            A graduate education from Northeastern University is unique because it is hands-on. You receive the practical experience you need to grow in your present sector or break into your preferred profession in addition to earning a master's degree, graduate certificate, or doctorate from Northeastern.The 6 months co-op program at Northeastern is very different from other universities, which gives students a wide exposure to the industry standards.
          </p>
          <a className="btn btn-primary" href="#!" style={{ backgroundColor: '#CC0000', color: 'white', textDecoration: 'none', padding: '10px 20px', borderRadius: '5px' }}>
            More Info
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;




