import React from 'react'
import { View, Text,FlatList } from 'react-native'
import products from '../../assets/data/cart'
import styles from './style';
import CartProductItem from '../../components/CartProductItem'
import product from '../../assets/data/product';
import Button from '../../components/Button';

import {useNavigation} from '@react-navigation/native';


const ShoppingCartScreen = () => {

    //method to get a number in js
    const totalPrice=products.reduce(
        (summedPrice,product)=>
        summedPrice+product.item.price*product.quantity,
        0,
        );

    //traditional method
    const total=()=>{
         var totalSum=0;
         for (var i=0;i<products.length;i++){
            totalSum+=products[i].item.price*products[i].quantity;
         }
         return totalSum;
    }


    const navigation=useNavigation();

    const onPress=()=>{
        navigation.navigate('Address')
    }


    return (
        <View style={styles.container}>
            
            <FlatList 
            data={products}
            renderItem={({item})=><CartProductItem cartItem={item}/>}
            keyExtractor={item=>item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={()=>(
                <View>
                    <Text style={{fontSize:18,fontWeight:'bold'}}>Subtotal ({products.length} item): <Text style={{color:'#e47911'}}>${total().toFixed(2)}</Text></Text>
                    <Button text="Proceed to Checkout" containerStyle={{backgroundColor:'#f7e300',borderColor:'#c7b782'}} onPress={onPress}/>
                </View>
            )}/>
        </View>
    )
}

export default ShoppingCartScreen;
