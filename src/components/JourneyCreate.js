import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import JourneyForm from './JourneyForm';

function JourneyCreate() {
  const journey = {
    id: uuidv4(),
    location: '',
    startDate: { day: 1, month: 1, year: new Date().getFullYear() },
    description: '',
    travellingCompanion: [],
    imageFile: '',
  };
  return (
    <main className="container">
      <section className="new-journey">
        <img
          className="new-journey__img"
          src="https://images.unsplash.com/photo-1553512313-64af79fdfe9c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
          alt="new-journey"
        />
        <JourneyForm submitButton="add journey" journey={journey} />
      </section>
    </main>
  );
}

export default JourneyCreate;
