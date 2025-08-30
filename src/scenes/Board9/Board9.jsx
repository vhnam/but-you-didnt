import React from 'react';
import clsx from 'clsx';

import imgBoard15 from '../../assets/images/story/15.jpg';

import {IcoNext, IcoPrevious} from '../../components/Icons';

import storyStyles from '../../assets/scss/story.module.scss';
import styles from './Board9.module.scss';

const Board9 = ({next, previous}) => {
  return (
    <div className={storyStyles.storyContainer}>
      <div className="row">
        <div className="col">
          <div className={clsx(storyStyles.quoteContainer, styles.container)}>
            &nbsp;
          </div>
        </div>
        <div className="col">
          <div
            className={clsx(
              storyStyles.imageContainer,
              storyStyles.coloredBackground,
            )}
          >
            <img src={imgBoard15} alt="15" className={storyStyles.image} />
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



export default Board9;
