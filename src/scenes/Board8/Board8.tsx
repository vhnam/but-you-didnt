import React from 'react';
import clsx from 'clsx';

import imgBoard14 from '../../assets/images/story/14.jpg';

import { IcoNext, IcoPrevious } from '../../components/Icons';

import storyStyles from '../../assets/scss/story.module.scss';
import styles from './Board8.module.scss';

interface Board8Props {
  next: () => void;
  previous: () => void;
}

const Board8: React.FC<Board8Props> = ({ next, previous }) => {
  return (
    <div className={storyStyles.storyContainer}>
      <div className="row">
        <div className="col">
          <div
            className={clsx(
              storyStyles.imageContainer,
              storyStyles.coloredBackground,
            )}
          >
            <img src={imgBoard14} alt="14" className={storyStyles.image} />
          </div>
        </div>
        <div className="col">
          <div className={clsx(storyStyles.quoteContainer, styles.container)}>
            &nbsp;
          </div>
        </div>
      </div>

      <div className={storyStyles.controls}>
        <div className={storyStyles.previousButton} onClick={previous}>
          <IcoPrevious />
        </div>
        <div className={storyStyles.nextButton} onClick={next}>
          <IcoNext color="#ffffff" />
        </div>
      </div>
    </div>
  );
};

export default Board8;
