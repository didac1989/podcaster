import { render, screen } from '@testing-library/react';
import { DUMMY_EPISODES } from '../../data/testData';
import Episode from './Episode';

it('renders correctly', () => {
  render(<Episode episode={DUMMY_EPISODES[0]} />);
  const headerElement = screen.getByRole('heading', { level: 2 });
  expect(headerElement).toBeInTheDocument();
  expect(headerElement).toHaveTextContent(DUMMY_EPISODES[0].title);
  const audioFigureElement = screen.getByRole('figure');
  expect(audioFigureElement).toBeInTheDocument();
});
