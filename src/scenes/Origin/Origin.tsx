import React from 'react';

import { IcoNext, IcoPrevious } from '@/components/Icons';
import Typography, { TypoWeight } from '@/components/Typography';

import imgOrigin from '@/assets/images/story/17.jpg';

interface OriginProps {
  next: () => void;
  previous: () => void;
}

const Origin = ({ next, previous }: OriginProps) => {
  return (
    <div className="flex justify-center items-center h-screen bg-white md:w-screen">
      <div className="max-w-2xl mx-auto">
        <Typography
          tag="p"
          className="px-4 mb-6 text-xl md:mb-12"
          weight={TypoWeight.light}
        >
          A common American family, mother and daughter lived together. Father
          was enlisted and went to Vietnam when daughter was 4 years old.
          Unfortunately he died. The mother didn't remarry and lived to 80. when
          she died, her daughter found a letter in her mother's things which the
          poem above "But you didn't"!
        </Typography>
        <img className="w-full" src={imgOrigin} alt="The Origin of the Poem" />
      </div>

      <div className="absolute left-4 right-4 bottom-12 z-50 lg:left-12 lg:right-12">
        <div
          className="float-left text-gray-600 opacity-80 transition-opacity duration-100 ease-out hover:text-gray-800 hover:opacity-100 hover:cursor-pointer"
          onClick={previous}
        >
          <IcoPrevious />
        </div>
        <div
          className="float-right text-gray-600 opacity-80 transition-opacity duration-100 ease-out hover:text-gray-800 hover:opacity-100 hover:cursor-pointer"
          onClick={next}
        >
          <IcoNext />
        </div>
      </div>
    </div>
  );
};

export default Origin;
