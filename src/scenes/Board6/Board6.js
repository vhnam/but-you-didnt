import React from 'react';
import PropTypes from 'prop-types';

import imgBoard12 from '../../assets/images/story/12.jpg';

import Typography, {TypoWeight} from '../../components/Typography';
import {IcoNext, IcoPrevious} from '../../components/Icons';

import storyStyles from '../../assets/scss/story.module.scss';

const Board6 = ({next, previous}) => {
  return (
    <div className={storyStyles.storyContainer}>
      <div className="row">
        <div className="col">
          <div className={storyStyles.imageContainer}>
            <img src={imgBoard12} alt="12" className={storyStyles.image} />
          </div>
        </div>
        <div className="col">
          <div className={storyStyles.quoteContainer}>
            <Typography className={storyStyles.quote} weight={TypoWeight.light}>
              Yes, there were lots of things you didn't do.
              <br />
              But you put up with me, and loved me, and protected me.
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

Board6.propTypes = {
  next: PropTypes.func.isRequired,
  previous: PropTypes.func.isRequired,
};

export default Board6;
