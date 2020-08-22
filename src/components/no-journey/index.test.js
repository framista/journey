import React from 'react';
import NoJourney from './index';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

describe('Testing NoJourney component', () => {
  it('text and link are rendered', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <NoJourney />
      </MemoryRouter>
    );
    const title = screen.getByText("You don't have any journeys");
    const link = screen.getByText('Add journey');
    expect(title).toBeInTheDocument();
    expect(link).toBeInTheDocument();
  });
});
