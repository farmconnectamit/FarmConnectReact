/**
 * Farm Connect - Border Radius
 * React Native CLI Theme
 */

export const radius = {
  none: 0,
  xs: 4,
  sm: 6,
  md: 8,
  lg: 12,
  xl: 16,
  '2xl': 20,
  '3xl': 24,
  full: 999,
} as const;

export const borderRadius = {
  button: radius.lg,
  card: radius.lg,
  input: radius.lg,
  badge: radius.md,
  avatar: radius.full,
  image: radius.md,
  modal: radius['2xl'],
  chip: radius.full,
} as const;

export type RadiusKey = keyof typeof radius;
export type BorderRadiusKey = keyof typeof borderRadius;
