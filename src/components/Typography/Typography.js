import {createElement} from 'react';
import clsx from 'clsx';

import {TypoVariants, TypoWeight} from './types';

import styles from './Typography.module.scss';

const Typography = ({tag, variant, weight, className, children, ...others}) => {
  const getVariant = (variant) => {
    switch (variant) {
      case TypoVariants.h1:
        return styles.h1;
      case TypoVariants.h2:
        return styles.h2;
      case TypoVariants.h3:
        return styles.h3;
      case TypoVariants.h4:
        return styles.h4;
      case TypoVariants.h5:
        return styles.h5;
      case TypoVariants.body:
        return styles.body;
      case TypoVariants.button:
        return styles.button;
      default:
        return TypoVariants.body;
    }
  };

  const getWeight = (weight) => {
    switch (weight) {
      case TypoWeight.light:
        return styles.light;
      case TypoWeight.regular:
        return styles.regular;
      case TypoWeight.medium:
        return styles.medium;
      case TypoWeight.semibold:
        return styles.semibold;
      default:
        return TypoWeight.regular;
    }
  };

  return createElement(
    tag,
    {
      ...others,
      className: clsx(className, getVariant(variant), getWeight(weight)),
    },
    children,
  );
};

Typography.defaultProps = {
  tag: 'div',
};

export default Typography;
