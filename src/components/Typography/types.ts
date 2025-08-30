export const TypoVariants = {
  inherit: 'inherit',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  body: 'body',
  button: 'button',
} as const;

export const TypoWeight = {
  light: 'light',
  regular: 'regular',
  medium: 'medium',
  semibold: 'semibold',
} as const;

export type TypoVariant = (typeof TypoVariants)[keyof typeof TypoVariants];
export type TypoWeightType = (typeof TypoWeight)[keyof typeof TypoWeight];
