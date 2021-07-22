import React from 'react'
import { View, Text, Pressable } from 'react-native'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import styles from './style';

const QuantitySelector = ({quantity,setQuantity}) => {

    const onMinus=()=>{
        setQuantity(Math.max(0,quantity-1));
    }

    const onPlus=()=>{
        setQuantity(quantity+1);
    }

    return (
        <View style={styles.container}>
            
            <Pressable onPress={onMinus} style={styles.quantity}>
                <SimpleLineIcons name="trash" size={20} color={'black'} style={styles.sign}/>
            </Pressable>
            <Text style={{fontSize:16}}>{quantity}</Text>
            <Pressable onPress={onPlus} style={styles.quantity}>
                <Text style={{fontSize:16}}>+</Text>
            </Pressable>
        </View>
    )
}

export default QuantitySelector
