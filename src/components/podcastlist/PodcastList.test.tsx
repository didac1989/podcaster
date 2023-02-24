import { render, screen } from '@testing-library/react';
import { DUMMY_PODCASTS } from '../../data/testData';

import PodcastList from './PodcastList';

it('renders correctly', () => {
  render(<PodcastList podcasts={DUMMY_PODCASTS} />);

  const potcatsListElement = screen.getByRole('list');
  expect(potcatsListElement).toBeInTheDocument();
  const potcatsListItemElement = screen.getAllByRole('listitem');
  expect(potcatsListItemElement).toHaveLength(DUMMY_PODCASTS.length);
});
