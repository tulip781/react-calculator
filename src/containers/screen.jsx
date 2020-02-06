import React, { Component } from 'react';

import { connect } from "react-redux";

class Screen extends Component {

  render() {
    return (
      <div className="screen-body" >
        <h1 className='answer'>{ this.props.currentValue }</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentValue: state.currentValue
  };
}

export default connect(mapStateToProps)(Screen);

