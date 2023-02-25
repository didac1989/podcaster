import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { DUMMY_SUMMARY } from '../../data/testData';

import PodcastSummary from './PodcastSummary';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

const renderComponent = () => {
  render(<PodcastSummary {...DUMMY_SUMMARY} />, { wrapper: BrowserRouter });

  return { podcastSummaryData: DUMMY_SUMMARY };
};

it('renders correctly', () => {
  const { podcastSummaryData } = renderComponent();
  const imgElement = screen.getByAltText(podcastSummaryData.name);
  expect(imgElement).toBeInTheDocument();
  const headerTitleElement = screen.getByRole('heading', {
    level: 4,
    name: podcastSummaryData.title,
  });
  expect(headerTitleElement).toBeInTheDocument();
  const headerDescriptionElement = screen.getByRole('heading', {
    level: 5,
  });
  expect(headerTitleElement).toBeInTheDocument();
  const artistElement = screen.getByText(`by ${podcastSummaryData.artist}`);
  expect(artistElement).toBeInTheDocument();
  expect(headerDescriptionElement).toBeInTheDocument();
});

it('redirects to correct URL on title element click', () => {
  const { podcastSummaryData } = renderComponent();

  const headerTitleElement = screen.getByRole('heading', {
    level: 4,
    name: podcastSummaryData.title,
  });
  userEvent.click(headerTitleElement);
  expect(mockHistoryPush).toHaveBeenCalledWith(
    `/podcast/${podcastSummaryData.id}`
  );
});

it('Redirects to correct URL on artist element click', () => {
  const { podcastSummaryData } = renderComponent();

  const artistElement = screen.getByText(`by ${podcastSummaryData.artist}`);
  userEvent.click(artistElement);
  expect(mockHistoryPush).toHaveBeenCalledWith(
    `/podcast/${podcastSummaryData.id}`
  );
});
