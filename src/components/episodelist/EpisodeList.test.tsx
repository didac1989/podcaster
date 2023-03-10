import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import EpisodesList from './EpisodeList';

import { DUMMY_EPISODES } from '../../data/testData';

it('renders correctly', async () => {
  const onClickHandler = jest.fn();
  render(<EpisodesList episodes={DUMMY_EPISODES} onClick={onClickHandler} />);

  const tableElement = screen.getByRole('table');
  expect(tableElement).toBeInTheDocument();
  const rowHeaderElements = screen.getByRole('rowheader');
  expect(rowHeaderElements).toBeInTheDocument();
  const rowElements = screen.getAllByRole('rowgroup');
  expect(rowElements).toHaveLength(DUMMY_EPISODES.length);

  const linkCellElement = screen.getByRole('cell', {
    name: DUMMY_EPISODES[0].title,
  });
  userEvent.click(linkCellElement);
  expect(onClickHandler).toHaveBeenCalledTimes(1);
});
