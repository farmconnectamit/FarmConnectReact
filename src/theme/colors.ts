/**
 * Farm Connect - Color Palette
 * React Native CLI Theme
 */

export const colors = {
  // Primary Brand Colors
  primary: '#4baf31',
  primaryDark: '#429929',
  primaryLight: '#5bc13f',
  primaryLighter: '#f0fdf4',

  // Success, Error, Warning, Info
  success: '#16a34a',
  successLight: '#22c55e',
  error: '#EF4444',
  errorLight: '#FEE2E2',
  warning: '#F59E0B',
  warningLight: '#FEF3C7',
  info: '#3B82F6',
  infoLight: '#DBEAFE',

  // Additional Brand Colors
  blue: '#3B82F6',
  purple: '#8B5CF6',
  orange: '#FFA500',
  gold: '#FFA500',

  // Grayscale
  white: '#ffffff',
  black: '#000000',
  gray50: '#f9fafb',
  gray100: '#f3f4f6',
  gray200: '#e5e7eb',
  gray300: '#d1d5db',
  gray400: '#9ca3af',
  gray500: '#6b7280',
  gray600: '#4b5563',
  gray700: '#374151',
  gray800: '#1f2937',
  gray900: '#111827',

  // Semantic Colors
  background: '#f9fafb',
  surface: '#ffffff',
  border: '#e5e7eb',
  borderLight: '#f3f4f6',
  text: '#1f2937',
  textSecondary: '#6b7280',
  textMuted: '#9ca3af',
  placeholder: '#9ca3af',

  // Special Colors
  overlay: 'rgba(0, 0, 0, 0.5)',
  overlayLight: 'rgba(0, 0, 0, 0.3)',
  shadow: '#000000',

  // Status Colors (for orders, products, etc.)
  pending: '#F59E0B',
  processing: '#3B82F6',
  completed: '#10B981',
  cancelled: '#EF4444',
  active: '#10B981',
  inactive: '#6b7280',

  // Rating/Reviews
  star: '#FFA500',

  // Cart Badge
  badge: '#EF4444',
} as const;

export type ColorKey = keyof typeof colors;
