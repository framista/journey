import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Journeys from '../components/Journeys';
import NotFoundPage from '../components/pages/notFoundPage';
import JourneyCreate from '../components/pages/create';
import JourneyEdit from '../components/pages/edit';

const AppRouter = () => (
  <Router>
    <div>
      <Switch>
        <Route path="/" component={Journeys} exact={true} />
        <Route path="/create" component={JourneyCreate} />
        <Route path="/edit/:id" component={JourneyEdit} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
