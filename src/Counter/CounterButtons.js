import React from 'react';
import { connect } from 'react-redux';

import { add, sub, reset } from './store';

const mapDispatchToProps = (dispatch) => ({
  isaAdd: (number) => dispatch(add(number)),
  isaSub: (number) => dispatch(sub(number)),
  isaReset: () => dispatch(reset())
})

class CounterButtons extends React.Component {

  state = {
    inputValue: 0
  }

  handleChange = (event) => {
    this.setState({
      inputValue: parseInt(
        event.target.value ? event.target.value : 0
      )
    });
  }

  render() {
    return(
      <div>
        <input type="number" value={this.state.inputValue} onChange={this.handleChange} />
        <button onClick={this.props.isaReset}>Reset</button>
        <button onClick={() => this.props.isaAdd(this.state.inputValue)}>Add</button>
        <button onClick={() => this.props.isaSub(this.state.inputValue)}>Sub</button>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(CounterButtons);
