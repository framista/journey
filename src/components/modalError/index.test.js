import React from 'react';
import ModalError from './index';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Testing modal error component', () => {
  it('title and description should rendered using data from props', () => {
    render(<ModalError title="Oops!" description="There is a problem" />);
    const title = screen.getByText('Oops!');
    const description = screen.getByText('There is a problem');
    expect(title).toBeInTheDocument();
    expect(title).toHaveClass('modal-error__title');
    expect(description).toBeInTheDocument();
    expect(description).toHaveClass('modal-error__description');
  });
});
