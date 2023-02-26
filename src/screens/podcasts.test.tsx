import { screen } from '@testing-library/react';
import { DUMMY_PODCASTS_REQ } from '../data/testData';
import { renderWithProviders } from '../tests/reduxProvaider';
import { createServer } from '../tests/server';
import Podcasts from './Podcasts';

createServer([
  {
    path: `${process.env.REACT_APP_ITUNES_URL}/us/rss/toppodcasts/limit=100/genre=1310/json`,
    res: () => {
      return DUMMY_PODCASTS_REQ;
    },
  },
]);

it('renders potcasts correctly', async () => {
  const { store } = renderWithProviders(<Podcasts />);

  const podcastEntries = await screen.findAllByRole('listitem');
  expect(podcastEntries).toHaveLength(store.getState().podcast.podcasts.length);

  const resultsElement = screen.getByText(
    `${store.getState().podcast.podcasts.length}`
  );
  expect(resultsElement).toBeInTheDocument();
});
