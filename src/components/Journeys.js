import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import JourneyTile from './JourneyTile';
import NoJourney from './NoJourney';

function Journeys() {
  /* TODO: change image*/
  const [journeys, setJourneys] = useState(
    JSON.parse(localStorage.getItem('journeys')) || []
  );

  const [blockClicking, setBlockClicking] = useState(false);

  const handleDeleteJourney = (id) => {
    const journeysFiltered = journeys.filter((journey) => journey.id !== id);
    setJourneys(journeysFiltered);
  };

  return (
    <main className="container">
      <section
        className="center-container"
        style={{ pointerEvents: blockClicking ? 'none' : 'auto' }}
      >
        {journeys.length ? (
          <div className="journey-container">
            {journeys.map((journey) => (
              <JourneyTile
                journey={journey}
                key={journey.id}
                deleteJourney={handleDeleteJourney}
                setBlockClicking={setBlockClicking}
              />
            ))}
          </div>
        ) : (
          <NoJourney />
        )}
        <Link className="new-journey__btn--create" to="/create">
          +
        </Link>
      </section>
    </main>
  );
}

export default Journeys;
