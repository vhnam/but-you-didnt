import React from 'react';

import Typography, {
  TypoVariants,
  TypoWeight,
} from '../../components/Typography';

import styles from './Home.module.scss';

const Home = () => {
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
        <Typography className={styles.subHeading} variant={TypoVariants.h3}>
          Merrill Glass
        </Typography>
      </div>
    </div>
  );
};

export default Home;
