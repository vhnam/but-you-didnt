import clsx from 'clsx';
import React, { useState } from 'react';

import { IcoNext, IcoPrevious } from '@/components/Icons';
import Typography, { TypoWeight } from '@/components/Typography';

import { BoardProps } from './types';

const Board = ({ data, next, previous }: BoardProps) => {
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
      className={clsx('max-w-2xl mx-auto text-xl', {
        'block animate-fadein': step === stepIndex + 1,
        hidden: step !== stepIndex + 1,
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
      className={clsx('max-w-80%', {
        'block animate-fadein': step === stepIndex + 1,
        hidden: step !== stepIndex + 1,
      })}
    />
  );

  const renderQuoteContainer = () => (
    <div
      className={clsx(
        'fixed top-0 left-0 right-0 z-10 flex flex-col items-center justify-center h-screen w-full px-8 pt-96 text-center md:px-20 md:pt-160 lg:static lg:px-6 lg:pt-0',
        data.customStyles?.quoteContainer === 'board7' && 'board7',
        data.customStyles?.quoteContainer === 'board8' && 'board8',
        data.customStyles?.quoteContainer === 'board9' && 'board9'
      )}
    >
      {data.steps.map((stepData, index) => renderQuote(index, stepData.quote))}
    </div>
  );

  const renderImageContainer = () => (
    <div
      className={clsx(
        'flex items-start justify-center w-full h-screen px-8 pt-20 bg-gray-200 md:px-20 lg:items-center lg:px-6',
        {
          'absolute bg-transparent z-10':
            data.customStyles?.imageContainer === 'coloredBackground',
        }
      )}
    >
      {data.steps.map((stepData, index) =>
        renderImage(index, stepData.image, stepData.imageAlt)
      )}
    </div>
  );

  const renderSingleLayout = () => (
    <div className="flex flex-wrap">
      <div className="relative w-full lg:w-1/2 lg:max-w-1/2">
        {renderImageContainer()}
      </div>
      <div className="relative w-full lg:w-1/2 lg:max-w-1/2">
        {renderQuoteContainer()}
      </div>
    </div>
  );

  const renderQuoteFirstLayout = () => (
    <div className="flex flex-wrap">
      <div className="relative w-full lg:w-1/2 lg:max-w-1/2">
        {renderQuoteContainer()}
      </div>
      <div className="relative w-full lg:w-1/2 lg:max-w-1/2">
        {renderImageContainer()}
      </div>
    </div>
  );

  const renderImageFirstLayout = () => (
    <div className="flex flex-wrap">
      <div className="relative w-full lg:w-1/2 lg:max-w-1/2">
        {renderImageContainer()}
      </div>
      <div className="relative w-full lg:w-1/2 lg:max-w-1/2">
        {renderQuoteContainer()}
      </div>
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
    <div>
      {renderLayout()}

      <div className="absolute left-4 right-4 bottom-12 z-50 lg:left-12 lg:right-12">
        <div
          className="float-left text-gray-600 opacity-80 transition-opacity duration-100 ease-out hover:text-gray-800 hover:opacity-100 hover:cursor-pointer"
          onClick={handlePrevious}
        >
          <IcoPrevious />
        </div>
        <div
          className="float-right text-gray-600 opacity-80 transition-opacity duration-100 ease-out hover:text-gray-800 hover:opacity-100 hover:cursor-pointer"
          onClick={handleNext}
        >
          <IcoNext />
        </div>
      </div>
    </div>
  );
};

export default Board;
