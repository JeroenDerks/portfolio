import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Others from './Others';
import { Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import { responsiveFontSizes } from '@material-ui/core/styles';
import Theme from 'styles/theme';
import * as serviceWorker from './serviceWorker';
import history from 'utils/history';
import IEnotification from './containers/IEnotification.js';

const theme = responsiveFontSizes(Theme);
const isIE = /*@cc_on!@*/ false || !!document.documentMode;

ReactDOM.render(
  <React.StrictMode>
    {isIE ? (
      <IEnotification />
    ) : (
      <Router history={history}>
        <ThemeProvider theme={theme}>
          <Switch>
            <Route path="/others" component={Others} />
            <Route path="/">
              <App />
            </Route>
          </Switch>
        </ThemeProvider>
      </Router>
    )}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
