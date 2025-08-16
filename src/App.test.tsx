import { render } from '@testing-library/react';
import App from './App';

test('renders portfolio app', () => {
  render(<App />);
  // Test that the app renders without crashing
  const appElement = document.querySelector('.App');
  expect(appElement).toBeInTheDocument();
});

test('renders header component', () => {
  render(<App />);
  const headerElement = document.querySelector('.header');
  expect(headerElement).toBeInTheDocument();
});

test('renders main sections', () => {
  render(<App />);
  const mainElement = document.querySelector('main');
  expect(mainElement).toBeInTheDocument();
});
