/**
 * Farm Connect - Sizes
 * React Native CLI Theme
 */

export const sizes = {
  // Icon sizes
  iconXs: 16,
  iconSm: 18,
  iconMd: 20,
  iconLg: 24,
  iconXl: 32,
  icon2xl: 40,
  icon3xl: 48,

  // Button heights
  buttonSm: 32,
  buttonMd: 40,
  buttonLg: 48,
  buttonXl: 56,

  // Header heights
  header: 70,
  bottomNav: 52,

  // Avatar sizes
  avatarXs: 24,
  avatarSm: 32,
  avatarMd: 40,
  avatarLg: 48,
  avatarXl: 64,
  avatar2xl: 80,
  avatar3xl: 100,

  // Input heights
  inputSm: 36,
  inputMd: 44,
  inputLg: 52,

  // Screen dimensions (411x731 mobile)
  screenWidth: 411,
  screenHeight: 731,

  // Image sizes
  imageXs: 40,
  imageSm: 60,
  imageMd: 80,
  imageLg: 120,
  imageXl: 200,
  imageFull: '100%',

  // Card sizes
  productCardWidth: '48%',
  statCardWidth: '48%',
} as const;

export type SizeKey = keyof typeof sizes;
