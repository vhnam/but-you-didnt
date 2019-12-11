import React from 'react';
import PropTypes from 'prop-types';

import Typography, {
  TypoVariants,
  TypoWeight,
} from '../../components/Typography';

import {IcoNext} from '../../components/Icons';

import styles from './Cover.module.scss';

const Cover = ({next}) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Typography
          className={styles.heading}
          variant={TypoVariants.h1}
          weight={TypoWeight.semibold}
        >
          BUT YOU DIDN'T
        </Typography>
        <div className={styles.author}>
          <Typography
            className={styles.subHeading}
            variant={TypoVariants.h3}
            weight={TypoWeight.light}
          >
            Merrill Glass
          </Typography>
        </div>
        <div className={styles.nextContainer} onClick={next}>
          <IcoNext className={styles.nextButton} />
        </div>
      </div>
    </div>
  );
};

Cover.propTypes = {
  next: PropTypes.func.isRequired,
};

export default Cover;
