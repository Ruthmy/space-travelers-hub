import { render } from '@testing-library/react';

// import { Provider } from 'react-redux'; // Import Provider from react-redux
import '@testing-library/jest-dom/extend-expect'; // For better DOM assertions
import { Provider } from 'react-redux';
import store from '../redux/store';
import App from '../App';

test('renders the App component correctly', () => {
  const { container } = render(<Provider store={store}><App /></Provider>);
  expect(container).toMatchSnapshot();
});
