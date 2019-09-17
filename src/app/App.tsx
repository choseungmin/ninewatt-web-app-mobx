import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { Router, Route, Switch } from 'react-router';
import { Root } from 'app/containers/Root';
import { TodoApp } from 'app/containers/TodoApp';
import MarketContainer from 'app/containers/market/MarketContainer';

// render react DOM
export const App = hot(({ history }) => (
  <Root>
    <Router history={history}>
      <Switch>
        <Route path="/todo" component={TodoApp} />
        <Route path="/" component={MarketContainer} />
      </Switch>
    </Router>
  </Root>
));
