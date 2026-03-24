import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import store from './store';
import { Provider as ReduxProvider } from "react-redux";

// Auth Screens
import AuthLanding from './src/screens/auth/AuthLanding';
import Login from './src/screens/auth/Login';
import Signup from './src/screens/auth/Signup';
import FarmerSignup from './src/screens/auth/FarmerSignup';

// Customer Screens
import HomePage from './src/screens/customer/HomePage';
import StoreFront from './src/screens/customer/StoreFront';
import ProductDetail from './src/screens/customer/ProductDetail';
import Cart from './src/screens/customer/Cart';
import Checkout from './src/screens/customer/Checkout';
import OrderSuccess from './src/screens/customer/OrderSuccess';
import EmptyCart from './src/screens/customer/EmptyCart';
import UserProfile from './src/screens/customer/UserProfile';

// Farmer Screens
import FarmerDashboard from './src/screens/farmer/Dashboard';
import FarmerProducts from './src/screens/farmer/Products';
import FarmerAddProduct from './src/screens/farmer/AddProduct';
import FarmerEditProduct from './src/screens/farmer/EditProduct';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <><ReduxProvider store={store}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="AuthLanding"
          screenOptions={{
            headerShown: false,
            animation: 'slide_from_right',
          }}
        >
          {/* Auth Stack */}
          <Stack.Screen name="AuthLanding" component={AuthLanding} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="FarmerSignup" component={FarmerSignup} />

          {/* Customer Stack */}
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="StoreFront" component={StoreFront} />
          <Stack.Screen name="ProductDetail" component={ProductDetail} />
          <Stack.Screen name="Cart" component={Cart} />
          <Stack.Screen name="Checkout" component={Checkout} />
          <Stack.Screen name="OrderSuccess" component={OrderSuccess} />
          <Stack.Screen name="EmptyCart" component={EmptyCart} />
          <Stack.Screen name="UserProfile" component={UserProfile} />

          {/* Farmer Stack */}
          <Stack.Screen name="FarmerDashboard" component={FarmerDashboard} />
          <Stack.Screen name="FarmerProducts" component={FarmerProducts} />
          <Stack.Screen name="FarmerAddProduct" component={FarmerAddProduct} />
          <Stack.Screen name="FarmerEditProduct" component={FarmerEditProduct} />
        </Stack.Navigator>
      </NavigationContainer>
      </ReduxProvider>
    </>
  );
}
