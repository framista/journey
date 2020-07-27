import React from 'react';
import 'normalize.css';
import './scss/base/App.scss';
import JourneyTile from './components/JourneyTile';

function App() {
  const journeys = [
    {
      localization: 'Egypt',
      date: '12.06.2009',
      image:
        'https://images.unsplash.com/photo-1566192091743-5966a6079984?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      companions: ['father'],
    },
    {
      localization: 'Spain',
      date: '02.06.2011',
      image:
        'https://images.unsplash.com/photo-1504019347908-b45f9b0b8dd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      companions: ['sister'],
    },
  ];

  return (
    <main className="container">
      <section className="center-container">
        <div>
          {journeys.map((journey) => (
            <JourneyTile journey={journey} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
