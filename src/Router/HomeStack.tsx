import React,{useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNav from '../Router/BottomTabNav'
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';

import Feather from 'react-native-vector-icons/Feather';

import { SafeAreaView ,View,TextInput,Text} from 'react-native'

const Root = createStackNavigator();

interface headerComponentProps{
  searchValue:string,
  setsearchValue:()=>void,
}

const HeaderComponent=({searchValue,setsearchValue}:headerComponentProps)=>{
  return(
    
    <SafeAreaView style={{backgroundColor:'#22e3dd'}}>
      <View style={{flexDirection:'row',margin:10,padding:5,backgroundColor:'white',alignItems:'center'}}>
        <Feather name='search' size={20}/>
      <TextInput style={{height:40,marginLeft:10,}}
      placeholder="Search..."
      value={searchValue}
      onChangeText={setsearchValue}
      />

      </View>

    </SafeAreaView>
  );
}

const HomeStack = () => {

  const [searchValue,setsearchValue]=useState('');
  return (
      <Root.Navigator
      screenOptions={{
        header:()=><HeaderComponent searchValue={searchValue} setsearchValue={setsearchValue}/>
      }}
      >
        <Root.Screen  name="homeScreen" options={{title:'Home',}}>
          {()=><HomeScreen searchValue={searchValue}/>}
        </Root.Screen>
        <Root.Screen component={ProductScreen} name="productScreen"/>
      </Root.Navigator>
  );
};

export default HomeStack;