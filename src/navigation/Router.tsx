import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/home/HomeScreen';
import SubMenuScreen from '../screens/menu/SubMenuScreen';
import CategoryScreen from '../screens/menu/CategoryScreen';
import ProductListScreen from '../screens/product/ProductListScreen';
import {NavigationContainer} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import ProductDetailScreen from '../screens/product/ProductDetailScreen';
import CartScreen from '../screens/cart/CartScreen';

const HomeStack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="HomeScreen">
      <HomeStack.Screen name={'HomeScreen'} component={HomeScreen} />
      <HomeStack.Screen name={'SubMenuScreen'} component={SubMenuScreen} />
      <HomeStack.Screen name={'CategoryScreen'} component={CategoryScreen} />
      <HomeStack.Screen
        name={'ProductListScreen'}
        component={ProductListScreen}
      />
      <HomeStack.Screen
        name={'ProductDetailScreen'}
        component={ProductDetailScreen}
      />
      <HomeStack.Screen name={'CartScreen'} component={CartScreen} />
    </HomeStack.Navigator>
  );
};
const AppNavigator = () => {
  useEffect(() => {
    // Check for any specific condition and perform action
  }, []);

  return (
    <NavigationContainer>
      {HomeStackNavigator()}
      <Toast />
    </NavigationContainer>
  );
};

export default AppNavigator;
