import React, {useState} from 'react';

import Cover from './scenes/Cover';
import Board1 from './scenes/Board1';
import Board2 from './scenes/Board2';
import Board3 from './scenes/Board3';
import Board4 from './scenes/Board4';

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
      case 3:
        return <Board2 next={next} previous={previous} />;
      case 4:
        return <Board3 next={next} previous={previous} />;
      case 5:
        return <Board4 next={next} previous={previous} />;
      default:
        return <Cover next={next} />;
    }
  };

  return <div>{showStep()}</div>;
};

export default App;
