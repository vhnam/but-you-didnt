import React from 'react';

import { IcoNext, IcoPrevious } from '@/components/Icons';
import Typography, { TypoWeight } from '@/components/Typography';

import styles from './Origin.module.scss';

import imgOrigin from '@/assets/images/story/17.jpg';
import storyStyles from '@/assets/scss/story.module.scss';

interface OriginProps {
  next: () => void;
  previous: () => void;
}

const Origin: React.FC<OriginProps> = ({ next, previous }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Typography
          tag="p"
          className={styles.description}
          weight={TypoWeight.light}
        >
          A common American family, mother and daughter lived together. Father
          was enlisted and went to Vietnam when daughter was 4 years old.
          Unfortunately he died. The mother didn't remarry and lived to 80. when
          she died, her daughter found a letter in her mother's things which the
          poem above "But you didn't"!
        </Typography>
        <img
          className={styles.image}
          src={imgOrigin}
          alt="The Origin of the Poem"
        />
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

export default Origin;
