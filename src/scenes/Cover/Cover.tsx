import React from 'react';

import { IcoNext } from '@/components/Icons';
import Typography, { TypoVariants, TypoWeight } from '@/components/Typography';

interface CoverProps {
  next: () => void;
}

const Cover: React.FC<CoverProps> = ({ next }) => {
  return (
    <div
      className="relative w-screen h-screen bg-gradient-to-b from-yellow-300 via-orange-500 to-orange-600"
      style={{
        background: `radial-gradient(circle at top left, #ffe366, #f06d06, 60%, transparent), radial-gradient(circle at bottom left, #4eaf36, #479b74)`,
      }}
    >
      <div className="flex items-center justify-center flex-col h-full">
        <Typography
          className="leading-none"
          variant={TypoVariants.h1}
          weight={TypoWeight.semibold}
        >
          BUT YOU DIDN'T
        </Typography>
        <div className="relative before:absolute before:top-8 before:left-[-3rem] before:content-[''] before:w-10 before:h-0.5 before:bg-gray-600 after:absolute after:top-8 after:right-[-3rem] after:content-[''] after:w-10 after:h-0.5 after:bg-gray-600">
          <Typography variant={TypoVariants.h3} weight={TypoWeight.light}>
            Merrill Glass
          </Typography>
        </div>
        <div
          className="absolute right-12 bottom-12 cursor-pointer"
          onClick={next}
        >
          <IcoNext className="text-gray-200 transition-colors duration-100 ease-out hover:text-white animate-[shaking_1s_infinite_alternate]" />
        </div>
      </div>
    </div>
  );
};

export default Cover;
