import React from 'react';

import { IcoNext } from '@/components/Icons';
import Typography, { TypoVariants, TypoWeight } from '@/components/Typography';

import styles from './Cover.module.scss';

interface CoverProps {
  next: () => void;
}

const Cover: React.FC<CoverProps> = ({ next }) => {
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

export default Cover;
