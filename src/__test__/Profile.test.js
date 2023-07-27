// Profile.test.js
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For custom DOM matchers
import Profile from '../components/Profile';

// Mock empty missions and rockets data to be used by useSelector
// Mocking useDispatch and useSelector
jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn(),
  useSelector: (selectorFn) => selectorFn(
    {
      rockets: { rockets: [] },
      missions: { list: [] },
    },
  ),
}));

it('renders correctly with no missions and rockets', () => {
  // Render the component
  const { container } = render(<Profile />);

  // Assert that the component renders correctly
  expect(container).toMatchSnapshot();
});
