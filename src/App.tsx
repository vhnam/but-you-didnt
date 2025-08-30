import '@/App.scss';
import React, { useState } from 'react';

import { boardData } from '@/config/boardData.ts';

import Board from '@/scenes/Board';
import Cover from '@/scenes/Cover';
import Origin from '@/scenes/Origin';
import Reference from '@/scenes/Reference';

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
        return (
          <Board data={boardData.board1} next={next} previous={previous} />
        );
      case 3:
        return (
          <Board data={boardData.board2} next={next} previous={previous} />
        );
      case 4:
        return (
          <Board data={boardData.board3} next={next} previous={previous} />
        );
      case 5:
        return (
          <Board data={boardData.board4} next={next} previous={previous} />
        );
      case 6:
        return (
          <Board data={boardData.board5} next={next} previous={previous} />
        );
      case 7:
        return (
          <Board data={boardData.board6} next={next} previous={previous} />
        );
      case 8:
        return (
          <Board data={boardData.board7} next={next} previous={previous} />
        );
      case 9:
        return (
          <Board data={boardData.board8} next={next} previous={previous} />
        );
      case 10:
        return (
          <Board data={boardData.board9} next={next} previous={previous} />
        );
      case 11:
        return (
          <Board data={boardData.board10} next={next} previous={previous} />
        );
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
