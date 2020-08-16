import React from 'react';
import { Router } from 'react-router-dom';
import { createHashHistory } from 'history';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AppRouter from './AppRouter';

describe('app router', () => {
  it('landing on a bad page', () => {
    const history = createHashHistory();
    history.push('/some/not/good/route');
    const { getByRole } = render(
      <Router history={history}>
        <AppRouter />
      </Router>
    );
    expect(getByRole('heading')).toHaveTextContent(/page not found/);
  });
  it('render home page', () => {
    const history = createHashHistory();
    history.push('/');
    const { getByText } = render(
      <Router history={history}>
        <AppRouter />
      </Router>
    );
    expect(getByText('+')).toBeInTheDocument();
  });
  it('render create page', () => {
    const history = createHashHistory();
    const route = '/create';
    history.push(route);
    const { getByAltText } = render(
      <Router history={history}>
        <AppRouter />
      </Router>
    );
    expect(getByAltText('new-journey')).toBeInTheDocument();
  });
});
