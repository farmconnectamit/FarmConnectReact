import React, { createContext, useCallback, useContext, useMemo, useState, ReactNode } from 'react';
import { useColorScheme } from 'react-native';

export interface ThemeColors {
  primary: string;
  background: string;
  text: string;
  // Add other colors like `card`, `border`, etc.
}

export interface Theme {
  mode: 'light' | 'dark';
  colors: ThemeColors;
}

export const lightTheme = {
  colors: {
    background: '#ffffff',
    text: '#000000',
    primary: '#007BFF',
  },
};

export const darkTheme = {
  colors: {
    background: '#000000',
    text: '#FFFFFF',
    primary: '#0056b3',
  },
};

