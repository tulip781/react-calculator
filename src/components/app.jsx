import React from 'react';

import Screen from '../containers/screen';
import Keypad from '../containers/keypad';

const App = () => {
  let appStyle = {
    marginTop: '0px',
    height: '70vh',
    width: '50vh',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'pink',
    display: 'flex',
    flexDirection: 'column' };

  return (
    <div className="app" style={appStyle}>
      <Screen />
      <Keypad />
    </div>
  );
};

export default App;
