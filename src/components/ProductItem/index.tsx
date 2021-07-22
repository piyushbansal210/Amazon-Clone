import React from 'react'
import { View, Text,Image, Pressable } from 'react-native'
import products from '../../assets/data/products';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {useNavigation} from '@react-navigation/native'

import styles from './style';
import ProductScreen from '../../screens/ProductScreen';

interface ProductItemProps{
    productItems:{
        id: string; 
    title: string; 
    image: string; 
    avgRating: number; 
    ratings: number; 
    price: number; 
    oldPrice: number;
} 
}

const ProductItem = (props: ProductItemProps) => {


    const navigation=useNavigation();


    const {productItems}=props;

    const onPress=()=>{
        navigation.navigate('productScreen',{id:productItems.id})
    }

    return (
        <Pressable style={styles.root} onPress={onPress}>
            <Image source={{uri:productItems.image}} style={styles.image}/>
            <View style={styles.rightContainer}> 
                <Text style={styles.title} numberOfLines={3}>{productItems.title}</Text>

                <View style={styles.rating}>
                    {[0,0,0,0,0].map((el,i)=><FontAwesome 
                    key={`${productItems.id}-${i}`} 
                    style={styles.star} 
                    name={i<Math.floor(productItems.avgRating)?'star':'star-o'}
                    size={18} 
                    color={'#e47911'}/>)}
                    <Text style={{marginLeft:7,fontSize:16,fontWeight:'bold'}}>{productItems.ratings}</Text>
                </View>
                <View style={{flexDirection:'row',alignItems:'center',marginTop:10,}}>
                    <Text style={styles.priceFrom}>from </Text>
                    <Text style={styles.price}>${productItems.price}  </Text>
                    {productItems.oldPrice && <Text style={styles.oldPrice}>${productItems.oldPrice}</Text>}
                </View>
            </View>
        </Pressable>
    )
}

export default ProductItem;
