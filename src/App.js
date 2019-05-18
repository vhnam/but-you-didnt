import React, {useState} from 'react';

import Cover from './scenes/Cover';
import Board1 from './scenes/Board1/Board1';

import './App.scss';

const App = () => {
  const [step, setStep] = useState(1);

  const next = () => {
    setStep(step + 1);
  };

  const previous = () => {
    setStep(step - 1);
  };

  const showStep = () => {
    switch (step) {
      case 1:
        return <Cover next={next} />;
      case 2:
        return <Board1 next={next} previous={previous} />;
      default:
        return <Cover next={next} />;
    }
  };

  return <div>{showStep()}</div>;
};

export default App;
