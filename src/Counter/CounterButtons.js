import React from 'react';
import { connect } from 'react-redux';

import { add, sub } from './store';

const mapStateToProps = (state) => ({
  value: state.counter.counterValue
});

const mapDispatchToProps = (dispatch) => ({
  add: () => dispatch(add()),
  sub: () => dispatch(sub())
});

class CounterButtons extends React.Component {

  render() {
    return(
      <div>
        <div>Value: {this.props.value}</div>
        <button onClick={this.props.add}>Add</button>
        <button onClick={this.props.sub}>Sub</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterButtons);
