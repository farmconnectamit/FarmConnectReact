import React, { createContext, useContext, useState, useEffect } from 'react';
import { Appearance } from 'react-native';
import { commonStyles } from './commonStyles';
import { colors } from './colors';
import { spacing } from './spacing';
import { radius } from './radius';
import { shadows } from './shadows';
import { fontFamilies, fontSizes } from './typography';
import { sizes } from './sizes';

// Define theme types
export type Theme = 'light' | 'dark';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isDarkMode: boolean;
}

// Create the context with default values
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Theme provider component
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');
  
  // Check system preference on mount
  useEffect(() => {
    const subscription = Appearance.addChangeListener((newTheme) => {
      if (newTheme.colorScheme === 'dark') {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    });
    
    // Set initial theme based on system preference
    const systemTheme = Appearance.getColorScheme();
    if (systemTheme === 'dark') {
      setTheme('dark');
    }
    
    return () => subscription.remove();
  }, []);
  
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };
  
  const isDarkMode = theme === 'dark';
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use theme
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Export theme-related constants for easy access
export const themeConstants = {
  colors,
  spacing,
  radius,
  shadows,
  fontFamilies,
  fontSizes,
  sizes,
  commonStyles,
};