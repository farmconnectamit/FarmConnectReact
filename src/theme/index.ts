/**
 * Farm Connect - Main Theme Export
 * React Native CLI Theme
 */

import { colors } from './colors';
import { typography, fontFamilies, fontSizes, lineHeights } from './typography';
import { spacing, padding, margin, gap } from './spacing';
import { shadows } from './shadows';
import { radius, borderRadius } from './radius';
import { sizes } from './sizes';

/**
 * Main theme object containing all design tokens
 */
export const theme = {
  colors,
  typography,
  fontFamilies,
  fontSizes,
  lineHeights,
  spacing,
  padding,
  margin,
  gap,
  shadows,
  radius,
  borderRadius,
  sizes,
} as const;

// Export individual modules for specific imports
export { colors } from './colors';
export { typography, fontFamilies, fontSizes, lineHeights } from './typography';
export { spacing, padding, margin, gap } from './spacing';
export { shadows } from './shadows';
export { radius, borderRadius } from './radius';
export { sizes } from './sizes';

// Export types
export type Theme = typeof theme;
export type { ColorKey } from './colors';
export type { TypographyKey } from './typography';
export type { SpacingKey } from './spacing';
export type { ShadowKey } from './shadows';
export type { RadiusKey, BorderRadiusKey } from './radius';
export type { SizeKey } from './sizes';

// Default export
export default theme;
