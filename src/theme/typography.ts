/**
 * Farm Connect - Typography
 * React Native CLI Theme
 */

import { TextStyle } from 'react-native';

export const fontFamilies = {
  regular: 'Poppins-Regular',
  medium: 'Poppins-Medium',
  semiBold: 'Poppins-SemiBold',
  bold: 'Poppins-Bold',
} as const;

export const fontSizes = {
  xs: 10,
  sm: 12,
  base: 14,
  lg: 16,
  xl: 18,
  '2xl': 20,
  '3xl': 24,
  '4xl': 28,
  '5xl': 32,
  '6xl': 40,
} as const;

export const lineHeights = {
  tight: 18,
  normal: 20,
  relaxed: 22,
  loose: 24,
  extraLoose: 28,
} as const;

export const typography: Record<string, TextStyle> = {
  // Headers
  h1: {
    fontFamily: fontFamilies.bold,
    fontSize: fontSizes['4xl'],
    lineHeight: lineHeights.extraLoose,
  },
  h2: {
    fontFamily: fontFamilies.bold,
    fontSize: fontSizes['3xl'],
    lineHeight: lineHeights.loose,
  },
  h3: {
    fontFamily: fontFamilies.semiBold,
    fontSize: fontSizes['2xl'],
    lineHeight: lineHeights.relaxed,
  },
  h4: {
    fontFamily: fontFamilies.semiBold,
    fontSize: fontSizes.lg,
    lineHeight: lineHeights.normal,
  },

  // Body Text
  bodyLarge: {
    fontFamily: fontFamilies.regular,
    fontSize: fontSizes.lg,
    lineHeight: lineHeights.relaxed,
  },
  body: {
    fontFamily: fontFamilies.regular,
    fontSize: fontSizes.base,
    lineHeight: lineHeights.normal,
  },
  bodySmall: {
    fontFamily: fontFamilies.regular,
    fontSize: fontSizes.sm,
    lineHeight: lineHeights.tight,
  },

  // Medium weight variants
  bodyMedium: {
    fontFamily: fontFamilies.medium,
    fontSize: fontSizes.base,
    lineHeight: lineHeights.normal,
  },
  bodySmallMedium: {
    fontFamily: fontFamilies.medium,
    fontSize: fontSizes.sm,
    lineHeight: lineHeights.tight,
  },

  // Button Text
  button: {
    fontFamily: fontFamilies.semiBold,
    fontSize: fontSizes.lg,
  },
  buttonSmall: {
    fontFamily: fontFamilies.semiBold,
    fontSize: fontSizes.base,
  },

  // Caption & Labels
  caption: {
    fontFamily: fontFamilies.regular,
    fontSize: fontSizes.sm,
  },
  captionMedium: {
    fontFamily: fontFamilies.medium,
    fontSize: fontSizes.sm,
  },
  label: {
    fontFamily: fontFamilies.medium,
    fontSize: fontSizes.base,
  },
  labelSmall: {
    fontFamily: fontFamilies.medium,
    fontSize: fontSizes.sm,
  },

  // Special text
  navLabel: {
    fontFamily: fontFamilies.medium,
    fontSize: 9,
  },
  badge: {
    fontFamily: fontFamilies.bold,
    fontSize: 8,
  },
  price: {
    fontFamily: fontFamilies.bold,
    fontSize: fontSizes.lg,
  },
  priceSmall: {
    fontFamily: fontFamilies.semiBold,
    fontSize: fontSizes.base,
  },
} as const;

export type TypographyKey = keyof typeof typography;
