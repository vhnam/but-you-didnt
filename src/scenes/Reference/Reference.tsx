import React from 'react';

import { IcoPrevious } from '@/components/Icons';
import Typography, { TypoVariants, TypoWeight } from '@/components/Typography';

interface ReferenceProps {
  previous: () => void;
}

const Reference: React.FC<ReferenceProps> = ({ previous }) => {
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-gray-200">
      <div className="max-w-2xl mx-auto">
        <Typography
          className="px-6 pb-2 border-b-2 border-gray-600"
          variant={TypoVariants.h1}
          weight={TypoWeight.semibold}
        >
          Reference
        </Typography>
        <ul className="pr-8 pl-12 text-xl">
          <li>
            Phong Vũ,{' '}
            <a
              href="https://www.facebook.com/estincevoi/posts/10213599978988347"
              target="__blank"
            >
              https://www.facebook.com/estincevoi/posts/10213599978988347
            </a>
          </li>
          <li>
            Jim Cheung,{' '}
            <a
              href="https://www.quora.com/What-is-the-most-beautiful-short-poem-ever-written/answer/Jim-Cheng-1"
              target="__blank"
            >
              https://www.quora.com/What-is-the-most-beautiful-short-poem-ever-written/answer/Jim-Cheng-1
            </a>
          </li>
        </ul>
      </div>

      <div className="absolute left-4 right-4 bottom-12 z-50 lg:left-12 lg:right-12">
        <div
          className="float-left text-gray-600 opacity-80 transition-opacity duration-100 ease-out hover:text-gray-800 hover:opacity-100 hover:cursor-pointer"
          onClick={previous}
        >
          <IcoPrevious />
        </div>
      </div>
    </div>
  );
};

export default Reference;
