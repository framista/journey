import React from 'react';
import { Link } from 'react-router-dom';

function NoJourney() {
  return (
    <div className="no-journey">
      <h2 className="no-journey__h2">You don't have any journeys</h2>
      <Link to="/create" className="no-journey__btn">Add journey</Link>
    </div>
  );
}

export default NoJourney;
