import React ,{useState}from 'react'
import { View, Text,Image } from 'react-native'
import products from '../../assets/data/products';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import styles from './style';
import QuantitySelector from '../QuantitySelector';

interface CartProductItemProps{
    cartItem:{
        id:string,
        quantity:number,
        option?:string,
        item:{
            id: string; 
            title: string; 
            image: string; 
            avgRating: number; 
            ratings: number; 
            price: number; 
            oldPrice: number;
        } 
    }
}

const CartProductItem = ({cartItem}: CartProductItemProps) => {

    const {quantity:quantityProp,item,option}=cartItem;

    const [quantity,setQuantity]=useState(quantityProp);

    return (
        <View style={styles.root}>
            <View style={styles.row}>
                <Image source={{uri:item.image}} style={styles.image}/>
                <View style={styles.rightContainer}> 
                    <Text style={styles.title} numberOfLines={3}>{item.title}</Text>

                    <View style={styles.rating}>
                        {[0,0,0,0,0].map((el,i)=><FontAwesome 
                        key={`${item.id}-${i}`} 
                        style={styles.star} 
                        name={i<Math.floor(item.avgRating)?'star':'star-o'}
                        size={18} 
                        color={'#e47911'}/>)}
                        <Text style={{marginLeft:7,fontSize:16,fontWeight:'bold'}}>{item.ratings}</Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center',marginTop:10,}}>
                        <Text style={styles.priceFrom}>from </Text>
                        <Text style={styles.price}>${item.price}  </Text>
                        {item.oldPrice && <Text style={styles.oldPrice}>${item.oldPrice}</Text>}
                    </View>
                </View>
            </View>
            <View style={styles.quantity}>
                <QuantitySelector quantity={quantity} setQuantity={setQuantity}/>
            </View>
        </View>
    )
}

export default CartProductItem;
