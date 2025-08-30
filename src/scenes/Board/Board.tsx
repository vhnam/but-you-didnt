import clsx from 'clsx';
import React, { useState } from 'react';

import { IcoNext, IcoPrevious } from '@/components/Icons';
import Typography, { TypoWeight } from '@/components/Typography';

import boardStyles from './Board.module.scss';
import { BoardProps } from './types';

import storyStyles from '@/assets/scss/story.module.scss';

const Board = ({ data, next, previous }:BoardProps) => {
  const [step, setStep] = useState<number>(1);
  const totalSteps = data.steps.length;

  const handleNext = (): void => {
    if (step >= totalSteps) {
      next();
    } else {
      setStep(step + 1);
    }
  };

  const handlePrevious = (): void => {
    if (step <= 1) {
      previous();
    } else {
      setStep(step - 1);
    }
  };

  const renderQuote = (stepIndex: number, content: string) => (
    <Typography
      className={clsx(storyStyles.quote, {
        [storyStyles.visible]: step === stepIndex + 1,
        [storyStyles.hidden]: step !== stepIndex + 1,
      })}
      weight={TypoWeight.light}
    >
      {content}
    </Typography>
  );

  const renderImage = (stepIndex: number, image: string, alt: string) => (
    <img
      src={image}
      alt={alt}
      className={clsx(storyStyles.image, {
        [storyStyles.visible]: step === stepIndex + 1,
        [storyStyles.hidden]: step !== stepIndex + 1,
      })}
    />
  );

  const renderQuoteContainer = () => (
    <div
      className={clsx(
        storyStyles.quoteContainer,
        data.customStyles?.quoteContainer === 'board7' && boardStyles.board7,
        data.customStyles?.quoteContainer === 'board8' && boardStyles.board8,
        data.customStyles?.quoteContainer === 'board9' && boardStyles.board9
      )}
    >
      {data.steps.map((stepData, index) => renderQuote(index, stepData.quote))}
    </div>
  );

  const renderImageContainer = () => (
    <div
      className={clsx(
        storyStyles.imageContainer,
        data.customStyles?.imageContainer === 'coloredBackground' &&
          storyStyles.coloredBackground
      )}
    >
      {data.steps.map((stepData, index) =>
        renderImage(index, stepData.image, stepData.imageAlt)
      )}
    </div>
  );

  const renderSingleLayout = () => (
    <div className="row">
      <div className="col">{renderImageContainer()}</div>
      <div className="col">{renderQuoteContainer()}</div>
    </div>
  );

  const renderQuoteFirstLayout = () => (
    <div className="row">
      <div className="col">{renderQuoteContainer()}</div>
      <div className="col">{renderImageContainer()}</div>
    </div>
  );

  const renderImageFirstLayout = () => (
    <div className="row">
      <div className="col">{renderImageContainer()}</div>
      <div className="col">{renderQuoteContainer()}</div>
    </div>
  );

  const renderLayout = () => {
    switch (data.layout) {
      case 'quote-first':
        return renderQuoteFirstLayout();
      case 'image-first':
        return renderImageFirstLayout();
      case 'single':
        return renderSingleLayout();
      default:
        return renderQuoteFirstLayout();
    }
  };

  return (
    <div className={storyStyles.storyContainer}>
      {renderLayout()}

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

export default Board;
