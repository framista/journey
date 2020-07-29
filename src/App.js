import React, { useState } from 'react';
import 'normalize.css';
import './scss/base/App.scss';
import JourneyTile from './components/JourneyTile';
import NoJourney from './components/NoJourney';

const journeysData = [
  {
    id: 1,
    localization: 'Egypt',
    date: '12.06.2009',
    image:
      'https://images.unsplash.com/photo-1566192091743-5966a6079984?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    companions: ['father'],
  },
  {
    id: 2,
    localization: 'Spain',
    date: '02.06.2011',
    image:
      'https://images.unsplash.com/photo-1504019347908-b45f9b0b8dd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    companions: ['sister'],
  },
  {
    id: 11,
    localization: 'Egypt',
    date: '12.06.2009',
    image:
      'https://images.unsplash.com/photo-1566192091743-5966a6079984?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    companions: ['father'],
  },
  {
    id: 22,
    localization: 'Spain',
    date: '02.06.2011',
    image:
      'https://images.unsplash.com/photo-1504019347908-b45f9b0b8dd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    companions: ['sister'],
  },
  {
    id: 111,
    localization: 'Egypt',
    date: '12.06.2009',
    image:
      'https://images.unsplash.com/photo-1566192091743-5966a6079984?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    companions: ['father'],
  },
  {
    id: 222,
    localization: 'Spain',
    date: '02.06.2011',
    image:
      'https://images.unsplash.com/photo-1504019347908-b45f9b0b8dd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    companions: ['sister'],
  },
  {
    id: 1111,
    localization: 'Egypt',
    date: '12.06.2009',
    image:
      'https://images.unsplash.com/photo-1566192091743-5966a6079984?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    companions: ['father'],
  },
  {
    id: 2222,
    localization: 'Spain',
    date: '02.06.2011',
    image:
      'https://images.unsplash.com/photo-1504019347908-b45f9b0b8dd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    companions: ['sister'],
  },
];

function App() {
  const [journeys, setJourneys] = useState(journeysData);

  const handleDeleteJourney = (id) => {
    const journeysFiltered = journeys.filter((journey) => journey.id !== id);
    setJourneys(journeysFiltered);
  };

  return (
    <main className="container">
      <section className="center-container">
        {journeys.length ? (
          <div className="journey-container">
            {journeys.map((journey) => (
            <JourneyTile
              journey={journey}
              key={journey.id}
              deleteJourney={handleDeleteJourney}
            />
            ))}
          </div>
        ) : (
         <NoJourney />
        )}
      </section>
    </main>
  );
}

export default App;
