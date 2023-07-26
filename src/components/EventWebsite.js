// src/components/EventWebsite.js

import './EventWebsite.css'; // Create this CSS file for styling
import Timer from './Countdown';
import { SocialIcon } from 'react-social-icons';
const procircle_logo = require("../logo_dark.png");

const EventWebsite = () => {
  return (
    <div className="event-website">
      <div className="background-image" />
      <div className="content">
        <img src={procircle_logo} width={150} height={100} style={{ marginBottom: "40px" }}/>
        <h1>Your professional social hub</h1>
        <h3 style={{ marginBottom: '40px' }}> is launching soon ... </h3>
        <div style={{ marginBottom: '80px' }}>
            <Timer/>
        </div>
        <p>
        Our mission is to establish a dynamic platform where professionals can gather regularly to exchange ideas, expertise, and experiences. Through themed monthly meetings, we aim to facilitate networking opportunities that enhance collaboration, promote career growth, and drive innovation across various industries.
        </p>
        <p> Join Linkedin group for more details </p>
        <SocialIcon fgColor='white' url="https://linkedin.com/groups/9397461/" />
      </div>
    </div>
  );
};

export default EventWebsite;
