import React from 'react';
import clsx from 'clsx';

import imgBoard16 from '../../assets/images/story/16.jpg';

import { IcoNext, IcoPrevious } from '../../components/Icons';
import Typography, { TypoWeight } from '../../components/Typography';

import storyStyles from '../../assets/scss/story.module.scss';
import styles from './Board10.module.scss';

interface Board10Props {
  next: () => void;
  previous: () => void;
}

const Board10: React.FC<Board10Props> = ({ next, previous }) => {
  return (
    <div className={storyStyles.storyContainer}>
      <div className="row">
        <div className="col">
          <div className={storyStyles.imageContainer}>
            <img src={imgBoard16} alt="16" className={storyStyles.image} />
          </div>
        </div>
        <div className="col">
          <div className={clsx(storyStyles.quoteContainer, styles.container)}>
            <Typography className={storyStyles.quote} weight={TypoWeight.light}>
              ... But you didn't.
            </Typography>
          </div>
        </div>
      </div>

      <div className={storyStyles.controls}>
        <div className={storyStyles.previousButton} onClick={previous}>
          <IcoPrevious />
        </div>
        <div className={storyStyles.nextButton} onClick={next}>
          <IcoNext />
        </div>
      </div>
    </div>
  );
};

export default Board10;
