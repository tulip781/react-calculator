import React from 'react';

import Screen from '../containers/screen';
import Keypad from '../containers/keypad';

const App = () => {
  return (
    <div className="app" >
      <Screen answer={5} />
      <Keypad />
    </div>
  );
};

export default App;
