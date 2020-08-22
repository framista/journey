import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ModalError from '../../modalError';
import JourneyForm from '../../JourneyForm';

function JourneyCreate(props) {
  const [modalError, setModalError] = useState(false);
  const currentDate = new Date();

  const journey = {
    id: uuidv4(),
    location: '',
    startDate: { day: currentDate.getDate(), month: currentDate.getMonth() + 1, year: currentDate.getFullYear() },
    description: '',
    travellingCompanion: [],
    imageFile: '',
  };

  const saveJourney = (journey) => {
    const journeys = JSON.parse(localStorage.getItem('journeys')) || [];
    journeys.unshift(journey);
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
        <img
          className="new-journey__img"
          src="https://images.unsplash.com/photo-1553512313-64af79fdfe9c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
          alt="new-journey"
        />
        <JourneyForm
          submitButton="add journey"
          journey={journey}
          submitJourney={saveJourney}
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

export default JourneyCreate;
