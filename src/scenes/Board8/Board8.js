import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import imgBoard14 from '../../assets/images/story/14.jpg';

import {IcoNext, IcoPrevious} from '../../components/Icons';

import storyStyles from '../../assets/scss/story.module.scss';
import styles from './Board8.module.scss';

const Board6 = ({next, previous}) => {
  return (
    <div className={storyStyles.storyContainer}>
      <div className="row">
        <div className="col">
          <div className={storyStyles.imageContainer}>
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

Board6.propTypes = {
  next: PropTypes.func.isRequired,
  previous: PropTypes.func.isRequired,
};

export default Board6;
