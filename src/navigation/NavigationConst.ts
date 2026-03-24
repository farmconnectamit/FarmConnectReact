/**
 * Navigation Route Constants
 * Defines all screen names and navigation parameters for the application
 */

import { FarmItemModel, Product } from "../types/api-response";
export const NAVIGATION_ROUTES = {
  HOME_SCREEN: 'Home' as keyof RootStackParamList,
  SIGN_UP_SCREEN: 'SignUp' as keyof RootStackParamList,
};
// Main App Screens
export const HOME_SCREEN = 'Home';
export const SIGN_IN_SCREEN = 'SignIn';
export const SIGN_UP_SCREEN = 'SignUp';
export const CART_SCREEN = 'Cart';
export const PRODUCT_DETAILS_SCREEN = 'Details';
export const FARMS_LIST_SCREEN = 'Merchants';
export const FARM_DETAILS_SCREEN = 'FarmDetailsScreen';

// Stack Navigation Names
export const MAIN_STACK = 'MainStack';
export const AUTH_STACK = 'AuthStack';
export const TAB_NAVIGATION = 'TabNavigation';

// Tab Navigation Screens
export const HOME_TAB = 'Home';
export const CART_TAB = 'Cart';
export const PROFILE_TAB = 'Profile';
export const PRODUCTS_TAB = 'Products';

// Navigation Parameters Types
export type RootStackParamList = {
  [HOME_SCREEN]: undefined;
  [SIGN_IN_SCREEN]: undefined;
  [SIGN_UP_SCREEN]: undefined;
  [CART_SCREEN]: undefined;
  [PRODUCT_DETAILS_SCREEN]: { product: Product };
  [FARMS_LIST_SCREEN]: undefined;
  [FARM_DETAILS_SCREEN]: { farmItemModel: FarmItemModel };
};

export type TabStackParamList = {
  [HOME_TAB]: undefined;
  [CART_TAB]: undefined;
  [PROFILE_TAB]: undefined;
};

export type MainStackParamList = {
  [AUTH_STACK]: undefined;
  [MAIN_STACK]: undefined;
};


export const navigateToMerchants = () => ({
  name: FARMS_LIST_SCREEN,
});

export const navigateToMerchantDetails = (merchant: FarmItemModel) => ({
  name: FARM_DETAILS_SCREEN,
  params: { merchant },
});
