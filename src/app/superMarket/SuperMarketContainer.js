import React from 'react';
import Counter from './container/Counter';
import SuperMarket from './container/SuperMarket';

class SuperMarketContainer extends React.Component {

  render() {
    return (
      <div>
        <Counter />
        <hr />
        <SuperMarket />
      </div>
    );
  }
}

export default SuperMarketContainer;
