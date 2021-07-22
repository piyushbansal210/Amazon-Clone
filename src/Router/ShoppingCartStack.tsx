import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNav from '../Router/BottomTabNav'
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import ShoppingCartScreen from '../screens/ShoppingCartScreen';
import AddressScreen from '../screens/AddressScreen';

const Root = createStackNavigator();

const ShoppingCartStack = () => {
  return (
      <Root.Navigator>
        <Root.Screen 
        component={ShoppingCartScreen} 
        name="ShoppingScreen"
        options={{
          title:'Home',
        }}/>
        <Root.Screen component={AddressScreen} name="Address"/>
      </Root.Navigator>
  );
};

export default ShoppingCartStack;