import React, {useState} from 'react';

import Cover from './scenes/Cover';
import Board1 from './scenes/Board1';
import Board2 from './scenes/Board2';
import Board3 from './scenes/Board3';
import Board4 from './scenes/Board4';
import Board5 from './scenes/Board5';
import Board6 from './scenes/Board6';
import Board7 from './scenes/Board7';
import Board8 from './scenes/Board8';
import Board9 from './scenes/Board9';
import Board10 from './scenes/Board10';
import Origin from './scenes/Origin';
import Reference from './scenes/Reference';

import './App.scss';

const App: React.FC = () => {
  const [step, setStep] = useState<number>(1);

  const next = (): void => {
    setStep(step + 1);
  };

  const previous = (): void => {
    setStep(step - 1);
  };

  const showStep = (): React.ReactElement => {
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
      case 6:
        return <Board5 next={next} previous={previous} />;
      case 7:
        return <Board6 next={next} previous={previous} />;
      case 8:
        return <Board7 next={next} previous={previous} />;
      case 9:
        return <Board8 next={next} previous={previous} />;
      case 10:
        return <Board9 next={next} previous={previous} />;
      case 11:
        return <Board10 next={next} previous={previous} />;
      case 12:
        return <Origin next={next} previous={previous} />;
      case 13:
        return <Reference previous={previous} />;
      default:
        return <Cover next={next} />;
    }
  };

  return <div>{showStep()}</div>;
};

export default App;
