import React, {useState} from 'react';
import clsx from 'clsx';

import imgBoard8 from '../../assets/images/story/8.jpg';
import imgBoard9 from '../../assets/images/story/9.jpg';

import Typography, {TypoWeight} from '../../components/Typography';
import {IcoNext, IcoPrevious} from '../../components/Icons';

import storyStyles from '../../assets/scss/story.module.scss';

const Board4 = ({next, previous}) => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    if (step > 1) {
      next();
    } else {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    if (1 === step) {
      previous();
    } else {
      setStep(step - 1);
    }
  };

  return (
    <div className={storyStyles.storyContainer}>
      <div className="row">
        <div className="col">
          <div className={storyStyles.imageContainer}>
            <img
              src={imgBoard8}
              alt="8"
              className={clsx(storyStyles.image, {
                [storyStyles.visible]: step === 1,
                [storyStyles.hidden]: step === 2,
              })}
            />
            <img
              src={imgBoard9}
              alt="9"
              className={clsx(storyStyles.image, {
                [storyStyles.visible]: step === 2,
                [storyStyles.hidden]: step === 1,
              })}
            />
          </div>
        </div>
        <div className="col">
          <div className={storyStyles.quoteContainer}>
            <Typography
              className={clsx(storyStyles.quote, {
                [storyStyles.visible]: step === 1,
                [storyStyles.hidden]: step === 2,
              })}
              weight={TypoWeight.light}
            >
              Do you remember the time I spilled strawberry pie all over your
              car rug?
            </Typography>
            <Typography
              className={clsx(storyStyles.quote, {
                [storyStyles.visible]: step === 2,
                [storyStyles.hidden]: step === 1,
              })}
              weight={TypoWeight.light}
            >
              I thought you'd hit me, but you didn't.
            </Typography>
          </div>
        </div>
      </div>

      <div className={storyStyles.controls}>
        <div className={storyStyles.previousButton} onClick={handlePrevious}>
          <IcoPrevious />
        </div>
        <div className={storyStyles.nextButton} onClick={handleNext}>
          <IcoNext />
        </div>
      </div>
    </div>
  );
};



export default Board4;
