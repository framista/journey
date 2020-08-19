import React, { useState } from 'react';
import NotFoundPage from '../notFoundPage';
import ModalError from '../../ModalError';
import JourneyForm from '../../JourneyForm';

function JourneyEdit(props) {
  const { id } = props.match.params;
  const [modalError, setModalError] = useState(false);

  const journeys = JSON.parse(localStorage.getItem('journeys'));
  const journeyIndex = journeys.findIndex((journey) => journey.id === id);
  if (journeyIndex === -1) {
    return <NotFoundPage />;
  }
  const journey = journeys[journeyIndex];
  const imageFile = journey.imageFile
    ? journey.imageFile
    : 'https://images.unsplash.com/photo-1597776089810-2550e6d1e689?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=638&q=80';

  const updateJourney = (journey) => {
    const journeys = JSON.parse(localStorage.getItem('journeys')) || [];
    const journeyIndex = journeys.findIndex((journey) => journey.id === id);
    if (journeyIndex === -1) {
      journeys.unshift(journey);
    } else {
      const updatedJourney = { ...journeys[journeyIndex], ...journey };
      journeys.splice(journeyIndex, 1, updatedJourney);
    }
    try {
      localStorage.setItem('journeys', JSON.stringify(journeys));
      props.history.push('/');
    } catch (err) {
      setModalError(true);
    }
  };

  return (
    <main className="container">
      <section className="new-journey">
        <div className="edit-journey__img">
          <img src={imageFile} alt="edit-journey" />
        </div>
        <JourneyForm
          submitButton="update journey"
          journey={journey}
          submitJourney={updateJourney}
        />
        {modalError && (
          <>
            <div className="background"></div>
            <ModalError
              title="Oops!"
              description="There is no space to save this journey 😲"
              onCloseModal={() => setModalError(false)}
            />
          </>
        )}
      </section>
    </main>
  );
}

export default JourneyEdit;
