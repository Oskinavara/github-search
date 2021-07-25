import React from 'react';
import ReactDOM from 'react-dom';
import 'src/styles/normalize.css';
import App from './App';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { store } from './store';
import { ThemeProvider } from 'styled-components';
import theme from 'src/styles/Theme';
import GlobalStyle from 'src/styles/GlobalStyle';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <Provider store={store}>
        <GlobalStyle />
        <App />
      </Provider>
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
