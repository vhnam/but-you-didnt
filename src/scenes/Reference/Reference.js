import React from 'react';
import PropTypes from 'prop-types';

import {IcoPrevious} from '../../components/Icons';
import Typography, {
  TypoWeight,
  TypoVariants,
} from '../../components/Typography';

import storyStyles from '../../assets/scss/story.module.scss';
import styles from './Reference.module.scss';

const Reference = ({previous}) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Typography
          className={styles.heading}
          variant={TypoVariants.h1}
          weight={TypoWeight.semibold}
        >
          Reference
        </Typography>
        <ul className={styles.list}>
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

      <div className={storyStyles.controls}>
        <div className={storyStyles.previousButton} onClick={previous}>
          <IcoPrevious />
        </div>
      </div>
    </div>
  );
};

Reference.propTypes = {
  previous: PropTypes.func.isRequired,
};

export default Reference;
