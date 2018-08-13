import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  tasks: state.list.tasks
});

class List extends React.Component {
  render() {
    return(
      <ul>
        {this.props.tasks.map(task => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
    );
  }
}

export default connect(mapStateToProps)(List);
