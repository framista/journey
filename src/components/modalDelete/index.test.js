import React from 'react';
import ModalDelete from './index';
import { render, screen } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';

describe('test delete modal', () => {
  it('location should be rendered in the paragraph', () => {
    const journey = {
      location: 'Szczecin',
      startDate: { day: 1, month: 1, year: 2020 },
      description: 'It was great',
    };
    render(
      <ModalDelete
        journey={journey}
        deleteJourney={jest.fn()}
        setDeleteModal={jest.fn()}
        setBlockClicking={jest.fn()}
      />
    );
    const location = screen.getByText(/Szczecin/);
    expect(location).toBeInTheDocument();
    const date = screen.getByText(/01.01.2020/);
    expect(date).toBeInTheDocument();
  });
  it('call the setBlockClicking and setDeleteModal function after clicking on the NO button', () => {
    const setBlockClicking = jest.fn();
    const setDeleteModal = jest.fn();
    render(
      <ModalDelete
        journey={{
          location: 'Szczecin',
          startDate: { day: 1, month: 1, year: 2020 },
        }}
        deleteJourney={jest.fn()}
        setDeleteModal={setDeleteModal}
        setBlockClicking={setBlockClicking}
      />
    );
    const noButton = screen.getByRole('button', { name: 'NO' });
    UserEvent.click(noButton);
    expect(setBlockClicking).toHaveBeenCalledTimes(1);
    expect(setDeleteModal).toHaveBeenCalledTimes(1);
  });
  it('call the setBlockClicking, setDeleteModal and deleteJourney function after clicking on the YES button', () => {
    const setBlockClicking = jest.fn();
    const setDeleteModal = jest.fn();
    const deleteJourney = jest.fn();
    render(
      <ModalDelete
        journey={{
          location: 'Szczecin',
          startDate: { day: 1, month: 1, year: 2020 },
        }}
        deleteJourney={deleteJourney}
        setDeleteModal={setDeleteModal}
        setBlockClicking={setBlockClicking}
      />
    );
    const yesButton = screen.getByRole('button', { name: 'YES' });
    UserEvent.click(yesButton);
    expect(setBlockClicking).toHaveBeenCalledTimes(1);
    expect(setDeleteModal).toHaveBeenCalledTimes(1);
    expect(deleteJourney).toHaveBeenCalledTimes(1);
  });
});
