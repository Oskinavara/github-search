import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';
import Input from 'src/components/atoms/Input';

test('Renders the app', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText('Search')).toBeInTheDocument();
});

// test('renders component', async () => {
//   const { getByText } = render(<App />);
//   expect(getByText('Please specify value')).toBeInTheDocument();
// });
