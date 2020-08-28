import React from 'react';
import NotFoundPage from './index';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import UserEvent from '@testing-library/user-event';

describe('Testing NotFoundPage component', () => {
  it('title and description are rendered', () => {
    render(
      <MemoryRouter initialEntries={['/notfounderrorsite']}>
        <NotFoundPage />
      </MemoryRouter>
    );
    const title = screen.getByRole('heading');
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(/Oops, page not found/);
    const description = screen.getByText(
      "We are very sorry for the inconvenience. It looks like you're trying to access a page that has been deleted or never even existed."
    );
    expect(description).toBeInTheDocument();
  });
  it('back home button should be rendered', () => {
    render(
      <MemoryRouter initialEntries={['/notfounderrorsite']}>
        <NotFoundPage />
      </MemoryRouter>
    );
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/Back to homepage/);
  });
  it('click on button back home', async () => {
    render(
      <MemoryRouter initialEntries={['/notfounderrorsite']}>
        <NotFoundPage />
      </MemoryRouter>
    );
    const button = screen.getByRole('button');
    UserEvent.click(button);
  });
  it('image from unsplash should be rendered', () => {
    render(
      <MemoryRouter initialEntries={['/notfounderrorsite']}>
        <NotFoundPage />
      </MemoryRouter>
    );
    const image = screen.getByAltText('desert-island');
    expect(image).toBeInTheDocument();
    expect(image.src).toMatch(/unsplash/);
  });
});
