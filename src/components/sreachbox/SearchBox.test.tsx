import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SearchBox from './SearchBox';

const testNumber = 100;
const renderComponent = () =>
  render(
    <SearchBox
      resultsNumber={testNumber}
      value=""
      onSearchChangeHandler={() => {}}
    />
  );

it('renders correcly', () => {
  renderComponent();

  const resultsElement = screen.getByText(`${testNumber}`);
  expect(resultsElement).toBeInTheDocument();
  expect(resultsElement).toHaveTextContent(`${testNumber}`);

  const searchElement = screen.getByRole('textbox');
  expect(searchElement).toBeInTheDocument();
  expect(searchElement).toHaveTextContent('');
});

it('should be focuseable and useable', () => {
  const testWord = 'test';
  renderComponent();

  const searchElement = screen.getByRole('textbox');
  userEvent.tab();
  expect(searchElement).toHaveFocus();
  userEvent.keyboard(testWord);
  expect(searchElement).toHaveValue(testWord);
  userEvent.clear(searchElement);
  expect(searchElement).toHaveValue('');
});
