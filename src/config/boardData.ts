import { BoardData } from '@/scenes/Board/types';

import imgBoard2 from '@/assets/images/story/2.jpg';
import imgBoard3 from '@/assets/images/story/3.jpg';
import imgBoard4 from '@/assets/images/story/4.jpg';
import imgBoard5 from '@/assets/images/story/5.jpg';
import imgBoard6 from '@/assets/images/story/6.jpg';
import imgBoard7 from '@/assets/images/story/7.jpg';
import imgBoard8 from '@/assets/images/story/8.jpg';
import imgBoard9 from '@/assets/images/story/9.jpg';
import imgBoard10 from '@/assets/images/story/10.jpg';
import imgBoard11 from '@/assets/images/story/11.jpg';
import imgBoard12 from '@/assets/images/story/12.jpg';
import imgBoard13 from '@/assets/images/story/13.jpg';
import imgBoard14 from '@/assets/images/story/14.jpg';
import imgBoard15 from '@/assets/images/story/15.jpg';
import imgBoard16 from '@/assets/images/story/16.jpg';

export const boardData: Record<string, BoardData> = {
  board1: {
    layout: 'quote-first',
    steps: [
      {
        quote: 'Remember the day I borrowed your brand new car and dented it?',
        image: imgBoard2,
        imageAlt: '2',
      },
      {
        quote: "I thought you'd kill me, but you didn't.",
        image: imgBoard3,
        imageAlt: '3',
      },
    ],
  },

  board2: {
    layout: 'image-first',
    steps: [
      {
        quote:
          'And remember the time I dragged you to the beach, and you said it would rain, and it did?',
        image: imgBoard4,
        imageAlt: '4',
      },
      {
        quote: 'I thought you\'d say, "I told you so." But you didn\'t.',
        image: imgBoard5,
        imageAlt: '5',
      },
    ],
  },

  board3: {
    layout: 'quote-first',
    steps: [
      {
        quote:
          'Do you remember the time I flirted with all the guys to make you jealous, and you were?',
        image: imgBoard6,
        imageAlt: '6',
      },
      {
        quote: "I thought you'd leave, but you didn't.",
        image: imgBoard7,
        imageAlt: '7',
      },
    ],
  },

  board4: {
    layout: 'image-first',
    steps: [
      {
        quote:
          'Do you remember the time I spilled strawberry pie all over your car rug?',
        image: imgBoard8,
        imageAlt: '8',
      },
      {
        quote: "I thought you'd hit me, but you didn't.",
        image: imgBoard9,
        imageAlt: '9',
      },
    ],
  },

  board5: {
    layout: 'quote-first',
    steps: [
      {
        quote:
          'And remember the time I forgot to tell you the dance was formal and you showed up in jeans?',
        image: imgBoard10,
        imageAlt: '10',
      },
      {
        quote: "I thought you'd drop me, but you didn't.",
        image: imgBoard11,
        imageAlt: '11',
      },
    ],
  },

  board6: {
    layout: 'image-first',
    steps: [
      {
        quote:
          "Yes, there were lots of things you didn't do.\nBut you put up with me, and loved me, and protected me.",
        image: imgBoard12,
        imageAlt: '12',
      },
    ],
  },

  board7: {
    layout: 'quote-first',
    steps: [
      {
        quote:
          'There were lots of things I wanted to make up to you when you returned from Vietnam.',
        image: imgBoard13,
        imageAlt: '13',
      },
    ],
    customStyles: {
      quoteContainer: 'board7',
    },
  },

  board8: {
    layout: 'image-first',
    steps: [
      {
        quote: '',
        image: imgBoard14,
        imageAlt: '14',
      },
    ],
    customStyles: {
      imageContainer: 'coloredBackground',
      quoteContainer: 'board8',
    },
  },

  board9: {
    layout: 'quote-first',
    steps: [
      {
        quote: '',
        image: imgBoard15,
        imageAlt: '15',
      },
    ],
    customStyles: {
      imageContainer: 'coloredBackground',
      quoteContainer: 'board9',
    },
  },

  board10: {
    layout: 'image-first',
    steps: [
      {
        quote: "... But you didn't.",
        image: imgBoard16,
        imageAlt: '16',
      },
    ],
  },
};
