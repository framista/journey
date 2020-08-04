import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Journeys from '../components/Journeys';
import NotFoundPage from '../components/NotFoundPage';
import JourneyCreate from '../components/JourneyCreate';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={Journeys} exact={true} />
        <Route path="/create" component={JourneyCreate} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
