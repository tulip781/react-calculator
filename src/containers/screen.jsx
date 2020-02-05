import React, { Component } from 'react';

class Screen extends Component {
  render() {
    return (
      <div className="screen-body" >
        <h1 className='answer'>{ this.props.answer }</h1>
      </div>
    );
  }
}

export default Screen;
