import React, {useState} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import imgBoard4 from '../../assets/images/story/4.jpg';
import imgBoard5 from '../../assets/images/story/5.jpg';

import Typography, {TypoWeight} from '../../components/Typography';
import {IcoNext, IcoPrevious} from '../../components/Icons';

import storyStyles from '../../assets/scss/story.module.scss';

const Board2 = ({next, previous}) => {
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
              src={imgBoard4}
              alt="2"
              className={clsx(storyStyles.image, {
                [storyStyles.visible]: step === 1,
                [storyStyles.hidden]: step === 2,
              })}
            />
            <img
              src={imgBoard5}
              alt="3"
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
              And remember the time I dragged you to the beach, and you said it
              would rain, and it did?
            </Typography>
            <Typography
              className={clsx(storyStyles.quote, {
                [storyStyles.visible]: step === 2,
                [storyStyles.hidden]: step === 1,
              })}
              weight={TypoWeight.light}
            >
              I thought you'd say, "I told you so." But you didn't.
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

Board2.propTypes = {
  next: PropTypes.func.isRequired,
  previous: PropTypes.func.isRequired,
};

export default Board2;
