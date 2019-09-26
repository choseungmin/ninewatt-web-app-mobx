import React, { Component } from 'react';
import Counter from './app/superMarket/container/Counter';
import SuperMarket from './app/superMarket/container/SuperMarket';
import SuperMarketContainer from './app/superMarket/SuperMarketContainer'
import DevTools from 'mobx-react-devtools';

class App extends Component {
  render() {
    return (
      <div>
        <SuperMarketContainer/>
      </div>
    );
  }
}

export default App;
