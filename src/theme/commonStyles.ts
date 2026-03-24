/**
 * Farm Connect - Common Styles
 * Reusable style components
 */

import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { colors } from './colors';
import { spacing } from './spacing';
import { radius } from './radius';
import { shadows } from './shadows';
import { fontFamilies, fontSizes } from './typography';
import { sizes } from './sizes';

export const commonStyles = StyleSheet.create({
  // Containers
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  // Headers
  header: {
    backgroundColor: colors.white,
    height: sizes.header,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderLight,
  },
  headerContent: {
    flex: 1,
  },
  headerTitle: {
    fontFamily: fontFamilies.semiBold,
    fontSize: fontSizes['2xl'],
    color: colors.gray800,
  },
  headerSubtitle: {
    fontFamily: fontFamilies.regular,
    fontSize: fontSizes.sm,
    color: colors.textMuted,
  },

  // Back Button (Green)
  backButton: {
    width: 20,
    height: 20,
    backgroundColor: colors.primary,
    borderRadius: radius.sm,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },

  // Cards
  card: {
    backgroundColor: colors.white,
    borderRadius: radius.lg,
    padding: spacing.lg,
    ...shadows.card,
  },
  cardSm: {
    backgroundColor: colors.white,
    borderRadius: radius.lg,
    padding: spacing.md,
    ...shadows.card,
  },

  // Buttons
  primaryButton: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.lg,
    borderRadius: radius.lg,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.button,
  },
  primaryButtonText: {
    fontFamily: fontFamilies.semiBold,
    fontSize: fontSizes.lg,
    color: colors.white,
  },
  secondaryButton: {
    backgroundColor: colors.white,
    paddingVertical: spacing.lg,
    borderRadius: radius.lg,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.primary,
  },
  secondaryButtonText: {
    fontFamily: fontFamilies.semiBold,
    fontSize: fontSizes.lg,
    color: colors.primary,
  },
  outlineButton: {
    backgroundColor: colors.primaryLighter,
    paddingVertical: spacing.lg,
    borderRadius: radius.lg,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.primary,
  },
  outlineButtonText: {
    fontFamily: fontFamilies.semiBold,
    fontSize: fontSizes.lg,
    color: colors.primary,
  },

  // Inputs
  input: {
    backgroundColor: colors.white,
    borderRadius: radius.lg,
    padding: spacing.md,
    fontFamily: fontFamilies.regular,
    fontSize: fontSizes.base,
    color: colors.text,
    borderWidth: 1,
    borderColor: colors.border,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.gray50,
    borderRadius: radius.lg,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    gap: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  inputLabel: {
    fontFamily: fontFamilies.medium,
    fontSize: fontSizes.base,
    color: colors.gray700,
    marginBottom: spacing.sm,
  },

  // Bottom Navigation
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing['2xl'],
    height: sizes.bottomNav,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    gap: 4,
  },
  navLabel: {
    fontFamily: fontFamilies.medium,
    fontSize: 9,
    color: colors.textMuted,
  },
  navLabelActive: {
    color: colors.primary,
  },

  // Badges
  badge: {
    backgroundColor: colors.badge,
    width: 14,
    height: 14,
    borderRadius: radius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    fontFamily: fontFamilies.bold,
    fontSize: 8,
    color: colors.white,
  },

  // Status Badges
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: spacing.md,
    paddingVertical: 6,
    borderRadius: radius.lg,
  },
  statusDot: {
    width: 6,
    height: 6,
    borderRadius: radius.full,
  },
  statusText: {
    fontFamily: fontFamilies.medium,
    fontSize: fontSizes.sm,
  },

  // Dividers
  divider: {
    height: 1,
    backgroundColor: colors.border,
  },
  dividerVertical: {
    width: 1,
    backgroundColor: colors.border,
  },

  // Shadows
  shadowSm: shadows.sm,
  shadowMd: shadows.md,
  shadowLg: shadows.lg,
  shadowXl: shadows.xl,

  // Text
  textCenter: {
    textAlign: 'center',
  },
  textBold: {
    fontFamily: fontFamilies.bold,
  },
  textSemiBold: {
    fontFamily: fontFamilies.semiBold,
  },
  textMuted: {
    color: colors.textMuted,
  },
  textPrimary: {
    color: colors.primary,
  },
  textError: {
    color: colors.error,
  },
  textSuccess: {
    color: colors.success,
  },
});

// Helper functions for dynamic styles
export const createShadow = (elevation: keyof typeof shadows): ViewStyle => {
  return shadows[elevation];
};

export const createSpacing = (value: keyof typeof spacing): ViewStyle => {
  return {
    padding: spacing[value],
  };
};

export const createMargin = (value: keyof typeof spacing): ViewStyle => {
  return {
    margin: spacing[value],
  };
};

export const createTextStyle = (
  size: keyof typeof fontSizes,
  weight: keyof typeof fontFamilies,
  color?: string
): TextStyle => {
  return {
    fontFamily: fontFamilies[weight],
    fontSize: fontSizes[size],
    ...(color && { color }),
  };
};
