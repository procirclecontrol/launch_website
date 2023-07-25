// src/components/EventWebsite.js

import './EventWebsite.css'; // Create this CSS file for styling
import Timer from './Countdown';

const EventWebsite = () => {
  return (
    <div className="event-website">
      <div className="background-image" />
      <div className="content">
        <h1>Your professional social hub</h1>
        <h3 style={{ marginBottom: '20px' }}> is launching soon ... </h3>
        <div style={{ marginBottom: '100px' }}>
            <Timer/>
        </div>
        <p>
        Our mission is to establish a dynamic platform where professionals can gather regularly to exchange ideas, expertise, and experiences. Through themed monthly meetings, we aim to facilitate networking opportunities that enhance collaboration, promote career growth, and drive innovation across various industries.
        </p>
      </div>
    </div>
  );
};

export default EventWebsite;
