import React,{useState} from 'react'
import { View, Text, ScrollView } from 'react-native'
import {Picker} from '@react-native-picker/picker';
import product from '../../assets/data/product';
import styles from './style';

import { useRoute } from '@react-navigation/native';

import Button from '../../components/Button';
import QuantitySelector from '../../components/QuantitySelector';
import ImageCarousel from '../../components/ImageCarousel';

const ProductScreen = () => {

    const [selectedOption,setSelectedOption]=useState(product.options?product.options[0]:null);
    const [quantity,setQuantity]=useState(1);

    const route=useRoute();
    console.log(route)


    return (
        <ScrollView style={styles.root}>
            <Text>{product.title}</Text>

            {/* Image Carousel */}
            <View style={{marginVertical:20}}>
                <ImageCarousel images={product.images}/>
            </View>


            {/* option selector */}
            <Picker selectedValue={selectedOption}
            onValueChange={(itemValue) =>setSelectedOption(itemValue)}>
                {product.options.map(option=>(<Picker.Item label={option} value={option} />))}
            </Picker>

            {/* price */}
            <View style={{flexDirection:'row',alignItems:'center',marginTop:10,}}>
                    <Text style={styles.priceFrom}>from </Text>
                    <Text style={styles.price}>${product.price}  </Text>
                    {product.oldPrice && <Text style={styles.oldPrice}>${product.oldPrice}</Text>}
            </View>

            {/* description */}
            <Text style={styles.description}>{product.description}</Text>

            {/* Quantity selector */}
            <View style={styles.quantity}>
                <QuantitySelector quantity={quantity} setQuantity={setQuantity}/>
            </View>

            {/* buttons */}
            <Button text={'Add to Cart'} onPress={()=>{console.log('Add to cart')}} />
            <Button text={'Buy Now'} onPress={()=>{console.log('Buy Now')}} />

            <View style={{height:30}}/>

            
        </ScrollView>
    )
}

export default ProductScreen;
