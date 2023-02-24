import { renderWithProviders } from '../tests/reduxProvaider';
import Header from './Header';
import { screen } from '@testing-library/react';

it('renders title link', () => {
  renderWithProviders(<Header />, {
    preloadedState: { ui: { loading: true } },
  });
  const linkElement = screen.getByRole('link');
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveTextContent('Podcaster');
});

it('displays a loading element when app is loading', () => {
  renderWithProviders(<Header />, {
    preloadedState: { ui: { loading: true } },
  });

  const loadingElement = screen.getByTitle(/loading/i);
  expect(loadingElement).toBeInTheDocument();
});

it('does not display a loading element when app is loading', () => {
  renderWithProviders(<Header />, {
    preloadedState: { ui: { loading: false } },
  });

  const loadingElement = screen.queryByTitle(/loading/i);
  expect(loadingElement).toBeNull();
});
