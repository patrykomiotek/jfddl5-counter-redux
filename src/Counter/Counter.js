import React from 'react';

class Counter extends React.Component {

  state = {
    value: 7
  }

  render() {
    return (
      <div>
        My awesome counter: {this.state.value}
      </div>
    );

  }
}

export default Counter;
