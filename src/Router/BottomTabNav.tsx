import React from 'react'
import { View, Text } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ShoppingCartScreen from '../screens/ShoppingCartScreen';
import ProductScreen from '../screens/ProductScreen';
import AddressScreen from '../screens/AddressScreen';

import HomeStack from './HomeStack';
import ShoppingCartStack from './ShoppingCartStack'

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Tab=createBottomTabNavigator();

const BottomTabNav = () => {
    return (
            <Tab.Navigator tabBarOptions={{showLabel:false, inactiveTintColor:"#ffbd7d",activeTintColor:'#e47911'}}>
                <Tab.Screen 
                name="Home" 
                component={HomeStack} 
                options={{
                    tabBarIcon:({color})=>{
                        return(
                            <Entypo name="home" color={color}  size={25}/>
                        )}
                }}
                />
                <Tab.Screen 
                name="Shopping" 
                component={ProductScreen}
                options={{
                    tabBarIcon:({color})=>{
                        return(
                            <AntDesign name="user" color={color}  size={25}/>
                        )}
                }}/>
                <Tab.Screen 
                name="hi" 
                component={ShoppingCartStack}
                options={{
                    tabBarIcon:({color})=>{
                        return(
                            <Entypo name="shopping-cart" color={color}  size={25}/>
                        )}
                }}/>
                <Tab.Screen 
                name="bye" 
                component={AddressScreen}
                options={{
                    tabBarIcon:({color})=>{
                        return(
                            <Entypo name="menu" color={color}  size={25}/>
                        )}
                }}/>
            </Tab.Navigator>
    )
}

export default BottomTabNav
