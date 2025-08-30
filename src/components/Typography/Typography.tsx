import clsx from 'clsx';
import React, { ReactNode } from 'react';

import { TypoVariant, TypoVariants, TypoWeight, TypoWeightType } from './types';

interface TypographyProps {
  tag?: string;
  variant?: TypoVariant;
  weight?: TypoWeightType;
  className?: string;
  children: ReactNode;
  [key: string]: unknown;
}

const Typography = ({
  tag = 'div',
  variant,
  weight,
  className,
  children,
  ...others
}: TypographyProps) => {
  const variantClasses = {
    [TypoVariants.h1]: 'font-sans fluid-h1',
    [TypoVariants.h2]: 'font-sans fluid-h2',
    [TypoVariants.h3]: 'font-sans fluid-h3',
    [TypoVariants.h4]: 'font-sans text-lg',
    [TypoVariants.h5]: 'font-sans text-base',
    [TypoVariants.body]: 'font-sans text-base',
    [TypoVariants.button]: 'font-sans text-sm',
  } as const;

  const getVariant = (variant?: TypoVariant): string => {
    return (
      variantClasses[variant as keyof typeof variantClasses] ||
      'font-sans text-base'
    );
  };

  const weightClasses = {
    [TypoWeight.light]: 'font-light',
    [TypoWeight.regular]: 'font-normal',
    [TypoWeight.medium]: 'font-medium',
    [TypoWeight.semibold]: 'font-semibold',
  } as const;

  const getWeight = (weight?: TypoWeightType): string => {
    return weightClasses[weight as keyof typeof weightClasses] || 'font-normal';
  };

  return React.createElement(
    tag as string,
    {
      ...others,
      className: clsx(className, getVariant(variant), getWeight(weight)),
    },
    children
  );
};

export default Typography;
