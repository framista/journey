import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import JourneyTile from './JourneyTile';
import NoJourney from './NoJourney';
import SearchForm from './SearchForm';
import { sortByDate } from '../utils/sort';
import { matchText } from '../utils/match';

function Journeys() {
  /* TODO: change image*/
  const [journeys, setJourneys] = useState(
    JSON.parse(localStorage.getItem('journeys')) || []
  );
  const [journeysToShow, setJourneysToShow] = useState(journeys);
  const [blockClicking, setBlockClicking] = useState(false);

  useEffect(() => {
    setJourneysToShow(journeys);
  }, [journeys]);

  const handleDeleteJourney = (id) => {
    const journeysFiltered = journeys.filter((journey) => journey.id !== id);
    setJourneys(journeysFiltered);
  };

  const sortJourneys = () => {
    setJourneysToShow((prevJourneys) => sortByDate(prevJourneys));
  };

  const searchInJourneys = (text) => {
    const journeysFiltered = journeys.filter((journey) => {
      const { id, imageFile, ...object } = journey;
      return matchText(text.toLowerCase(), object);
    });
    setJourneysToShow(journeysFiltered);
  };

  return (
    <main className="container">
      <section
        className="center-container"
        style={{ pointerEvents: blockClicking ? 'none' : 'auto' }}
      >
        <SearchForm sort={sortJourneys} search={searchInJourneys} />
        {journeys.length ? (
          journeysToShow.length ? (
            <div className="journey-container">
              {journeysToShow.map((journey) => (
                <JourneyTile
                  journey={journey}
                  key={journey.id}
                  deleteJourney={handleDeleteJourney}
                  setBlockClicking={setBlockClicking}
                />
              ))}
            </div>
          ) : (
            <h2 className="no-journey-toshow">There is nothing to show</h2>
          )
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
