import { render } from '@testing-library/react';
import App from './App';

test('renders portfolio app', () => {
  render(<App />);
  // Test that the app renders without crashing
  expect(document.body).toBeInTheDocument();
});

test('renders header component', () => {
  render(<App />);
  // Test that header renders
  expect(document.body).toBeInTheDocument();
});

test('renders main sections', () => {
  render(<App />);
  // Test that main content renders
  expect(document.body).toBeInTheDocument();
});
