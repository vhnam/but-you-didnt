import React, {ReactNode} from 'react';

import clsx from 'clsx';

import {TypoVariants, TypoWeight, TypoVariant, TypoWeightType} from './types';

import styles from './Typography.module.scss';

interface TypographyProps {
  tag?: string;
  variant?: TypoVariant;
  weight?: TypoWeightType;
  className?: string;
  children: ReactNode;
  [key: string]: any;
}

const Typography = ({
  tag = 'div',
  variant,
  weight,
  className,
  children,
  ...others
}: TypographyProps) => {
  const getVariant = (variant?: TypoVariant): string => {
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
        return styles.body;
    }
  };

  const getWeight = (weight?: TypoWeightType): string => {
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
        return styles.regular;
    }
  };

  return React.createElement(
    tag as any,
    {
      ...others,
      className: clsx(className, getVariant(variant), getWeight(weight)),
    },
    children,
  );
};

export default Typography;
