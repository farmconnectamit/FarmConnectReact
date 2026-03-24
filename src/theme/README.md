# 🎨 Farm Connect Theme System

Complete design system for React Native CLI with all design tokens centralized.

---

## 📁 Theme Structure

```
src/theme/
├── index.ts              # Main export
├── colors.ts             # Color palette
├── typography.ts         # Font families, sizes, styles
├── spacing.ts            # Spacing, padding, margin, gap
├── shadows.ts            # Shadow presets
├── radius.ts             # Border radius values
├── sizes.ts              # Component sizes
├── commonStyles.ts       # Reusable style components
└── README.md            # This file
```

---

## 🚀 Quick Start

### Import the theme

```typescript
// Import everything
import theme from '../theme';

// Import specific modules
import { colors } from '../theme';
import { typography } from '../theme';
import { spacing } from '../theme';
import { shadows } from '../theme';
import { commonStyles } from '../theme/commonStyles';
```

---

## 🎨 Colors

### Usage

```typescript
import { colors } from '../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
  },
  text: {
    color: colors.text,
  },
  primaryButton: {
    backgroundColor: colors.primary,
  },
});
```

### Available Colors

**Brand Colors:**
- `primary` - #4baf31 (Farm Connect Green)
- `primaryDark` - #429929
- `primaryLight` - #5bc13f
- `primaryLighter` - #f0fdf4

**Status Colors:**
- `success` - #16a34a
- `error` - #EF4444
- `warning` - #F59E0B
- `info` - #3B82F6

**Grayscale:**
- `white`, `black`
- `gray50` through `gray900`

**Semantic:**
- `background`, `surface`, `border`, `text`, `textSecondary`, `textMuted`

---

## ✍️ Typography

### Usage

```typescript
import { typography, fontFamilies, fontSizes } from '../theme';

const styles = StyleSheet.create({
  // Use preset typography
  title: {
    ...typography.h1,
    color: colors.text,
  },
  
  // Or create custom
  custom: {
    fontFamily: fontFamilies.semiBold,
    fontSize: fontSizes.lg,
  },
});
```

### Typography Presets

- **Headers:** `h1`, `h2`, `h3`, `h4`
- **Body:** `body`, `bodyLarge`, `bodySmall`, `bodyMedium`
- **Buttons:** `button`, `buttonSmall`
- **Labels:** `label`, `labelSmall`, `caption`
- **Special:** `navLabel`, `badge`, `price`

### Font Families

- `regular` - Poppins-Regular
- `medium` - Poppins-Medium
- `semiBold` - Poppins-SemiBold
- `bold` - Poppins-Bold

### Font Sizes

- `xs` (10), `sm` (12), `base` (14), `lg` (16)
- `xl` (18), `2xl` (20), `3xl` (24), `4xl` (28)
- `5xl` (32), `6xl` (40)

---

## 📏 Spacing

### Usage

```typescript
import { spacing, padding, margin, gap } from '../theme';

const styles = StyleSheet.create({
  container: {
    padding: spacing.lg,        // 16
    margin: margin.md,          // 12
    gap: gap.sm,                // 8
  },
});
```

### Spacing Scale

- `xs` - 4px
- `sm` - 8px
- `md` - 12px
- `lg` - 16px
- `xl` - 20px
- `2xl` - 24px
- `3xl` - 32px
- `4xl` - 40px

---

## 🌑 Shadows

### Usage

```typescript
import { shadows } from '../theme';

const styles = StyleSheet.create({
  card: {
    ...shadows.card,
  },
  button: {
    ...shadows.button,
  },
});
```

### Shadow Presets

- `none` - No shadow
- `sm` - Small shadow (elevation 1)
- `md` - Medium shadow (elevation 2)
- `lg` - Large shadow (elevation 4)
- `xl` - Extra large shadow (elevation 8)
- `card` - Card shadow
- `button` - Button shadow (green tint)
- `modal` - Modal shadow

---

## 🔲 Border Radius

### Usage

```typescript
import { radius, borderRadius } from '../theme';

const styles = StyleSheet.create({
  card: {
    borderRadius: radius.lg,      // 12
  },
  button: {
    borderRadius: borderRadius.button,  // 12
  },
  avatar: {
    borderRadius: borderRadius.avatar,  // 999
  },
});
```

### Radius Scale

- `none` (0), `xs` (4), `sm` (6), `md` (8)
- `lg` (12), `xl` (16), `2xl` (20), `3xl` (24)
- `full` (999)

### Component Radius

- `button`, `card`, `input`, `badge`, `avatar`, `image`, `modal`, `chip`

---

## 📐 Sizes

### Usage

```typescript
import { sizes } from '../theme';

const styles = StyleSheet.create({
  header: {
    height: sizes.header,        // 70
  },
  icon: {
    width: sizes.iconLg,         // 24
    height: sizes.iconLg,
  },
  avatar: {
    width: sizes.avatarMd,       // 40
    height: sizes.avatarMd,
  },
});
```

### Size Categories

- **Icons:** `iconXs` through `icon3xl`
- **Buttons:** `buttonSm` through `buttonXl`
- **Avatars:** `avatarXs` through `avatar3xl`
- **Inputs:** `inputSm`, `inputMd`, `inputLg`
- **Headers:** `header` (70), `bottomNav` (52)
- **Images:** `imageXs` through `imageFull`

---

## 🎯 Common Styles

Pre-built reusable components.

### Usage

```typescript
import { commonStyles } from '../theme/commonStyles';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.container,
  },
  header: {
    ...commonStyles.header,
  },
  backButton: {
    ...commonStyles.backButton,
  },
  primaryButton: {
    ...commonStyles.primaryButton,
  },
});
```

### Available Common Styles

**Containers:**
- `container`, `centered`, `row`, `rowBetween`

**Headers:**
- `header`, `headerContent`, `headerTitle`, `headerSubtitle`, `backButton`

**Cards:**
- `card`, `cardSm`

**Buttons:**
- `primaryButton`, `primaryButtonText`
- `secondaryButton`, `secondaryButtonText`
- `outlineButton`, `outlineButtonText`

**Inputs:**
- `input`, `inputContainer`, `inputLabel`

**Navigation:**
- `bottomNav`, `navItem`, `navLabel`, `navLabelActive`

**Badges:**
- `badge`, `badgeText`, `statusBadge`, `statusDot`, `statusText`

**Dividers:**
- `divider`, `dividerVertical`

**Text:**
- `textCenter`, `textBold`, `textSemiBold`, `textMuted`, `textPrimary`, `textError`, `textSuccess`

---

## 📝 Complete Example

```typescript
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors, typography, spacing, shadows, radius } from '../theme';
import { commonStyles } from '../theme/commonStyles';
import Icon from 'react-native-vector-icons/Ionicons';

export default function ExampleScreen() {
  return (
    <View style={styles.container}>
      {/* Using commonStyles */}
      <View style={commonStyles.header}>
        <TouchableOpacity style={commonStyles.backButton}>
          <Icon name="chevron-back" size={20} color="#fff" />
        </TouchableOpacity>
        <View style={commonStyles.headerContent}>
          <Text style={commonStyles.headerTitle}>Example</Text>
          <Text style={commonStyles.headerSubtitle}>Using theme</Text>
        </View>
      </View>

      {/* Using theme tokens */}
      <View style={styles.card}>
        <Text style={styles.title}>Theme Example</Text>
        <Text style={styles.description}>
          This uses the centralized theme system
        </Text>
      </View>

      {/* Using common button */}
      <TouchableOpacity style={commonStyles.primaryButton}>
        <Text style={commonStyles.primaryButtonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: radius.lg,
    padding: spacing.lg,
    margin: spacing.lg,
    ...shadows.card,
  },
  title: {
    ...typography.h3,
    color: colors.text,
    marginBottom: spacing.sm,
  },
  description: {
    ...typography.body,
    color: colors.textSecondary,
  },
});
```

---

## 🔧 Helper Functions

### Dynamic Styles

```typescript
import { createShadow, createTextStyle } from '../theme/commonStyles';

const dynamicStyles = StyleSheet.create({
  customCard: {
    ...createShadow('lg'),
  },
  customText: {
    ...createTextStyle('lg', 'semiBold', colors.primary),
  },
});
```

---

## 🎨 Theme Benefits

✅ **Consistency** - All design tokens in one place  
✅ **Maintainability** - Easy to update globally  
✅ **Type Safety** - Full TypeScript support  
✅ **Performance** - Optimized with StyleSheet.create  
✅ **Scalability** - Easy to extend and customize  
✅ **Reusability** - Common styles reduce duplication  

---

## 📦 Files Overview

| File | Purpose | Exports |
|------|---------|---------|
| `colors.ts` | Color palette | `colors` object |
| `typography.ts` | Fonts & text styles | `typography`, `fontFamilies`, `fontSizes` |
| `spacing.ts` | Spacing system | `spacing`, `padding`, `margin`, `gap` |
| `shadows.ts` | Shadow presets | `shadows` object |
| `radius.ts` | Border radius | `radius`, `borderRadius` |
| `sizes.ts` | Component sizes | `sizes` object |
| `commonStyles.ts` | Reusable styles | `commonStyles`, helper functions |
| `index.ts` | Main export | Everything combined |

---

## 🚀 Migration Guide

### Before (without theme):

```typescript
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafb',
    padding: 16,
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: '#1f2937',
  },
});
```

### After (with theme):

```typescript
import { colors, typography, spacing } from '../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    padding: spacing.lg,
  },
  title: {
    ...typography.h3,
    color: colors.text,
  },
});
```

---

## ✅ Best Practices

1. **Always use theme tokens** instead of hardcoded values
2. **Use commonStyles** for standard components
3. **Combine theme tokens** for custom components
4. **Import only what you need** for better tree-shaking
5. **Use TypeScript types** for type safety
6. **Keep custom styles minimal** - reuse theme whenever possible

---

Your Farm Connect app now has a complete, maintainable design system! 🎉
