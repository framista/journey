import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import JourneyTile from './JourneyTile';
import NoJourney from './NoJourney';

function Journeys() {
  /* TODO: change image*/
  const [journeys, setJourneys] = useState(
    JSON.parse(localStorage.getItem('journeys')) || [
      {
        id: 2222,
        localization: 'Spain',
        date: '02.06.2011',
        image:
          'https://images.unsplash.com/photo-1504019347908-b45f9b0b8dd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        companions: ['sister'],
      },
    ]
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
