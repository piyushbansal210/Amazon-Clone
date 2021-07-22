import React from 'react';
import {View,Text, FlatList} from 'react-native';
import ProductItem from '../../components/ProductItem';

import products from '../../assets/data/products'

import styles from './style';

const HomeScreen = ({searchValue}:{searchValue:string})=>{

    console.log(searchValue)
    return(
        <View style={styles.container}>
            <FlatList 
            data={products}
            renderItem={({item})=><ProductItem productItems={item}/>}
            keyExtractor={item=>item.id}
            showsVerticalScrollIndicator={false}/>
        </View>
    )
}

export default HomeScreen;