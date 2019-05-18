import React, {useState} from 'react';

import Cover from './scenes/Cover';

import './App.css';

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
      default:
        return <Cover next={next} />;
    }
  };

  return <div>{showStep()}</div>;
};

export default App;
