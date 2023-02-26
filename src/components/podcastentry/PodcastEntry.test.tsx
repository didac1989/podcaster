import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

import PodcastEntry from './PodcastEntry';
import { DUMMY_PODCASTS } from '../../data/testData';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

const renderComponent = () => {
  render(<PodcastEntry podcast={DUMMY_PODCASTS[0]} />, {
    wrapper: BrowserRouter,
  });
  return { podcast: DUMMY_PODCASTS[0] };
};

it('renders correctly', () => {
  const { podcast } = renderComponent();

  const imageElement = screen.getByAltText(podcast.name);
  expect(imageElement).toBeInTheDocument();
  const titleElement = screen.getByText(podcast.title);
  expect(titleElement).toHaveTextContent(podcast.title);
  const artistElement = screen.getByText(`Author: ${podcast.artist}`);
  expect(artistElement).toHaveTextContent(podcast.artist);
});

it('is clickeable and reidirects correctly', async () => {
  const { podcast } = renderComponent();

  const clickableDivElement = await screen.findByTitle(podcast.title);
  userEvent.click(clickableDivElement);
  expect(mockHistoryPush).toHaveBeenCalledWith(`/podcast/${podcast.id}`);
});
