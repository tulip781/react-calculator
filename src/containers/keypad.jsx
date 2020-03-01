import React, { Component } from 'react';

import Button from './button';

class Keypad extends Component {
  static defaultProps = {
    keyValues: ['clear', '÷', '7', '8', '9', '-', '4', '5', '6', '+', '1', '2', '3', '*','0', '.', '=']
  }

  render() {
    return (
      <div className="keypad-body" >
        {this.props.keyValues.map((key) => {
          return <Button key={key} buttonValue={key} />;
        })}
      </div>
    );
  }
}

export default Keypad;

