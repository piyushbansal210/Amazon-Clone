import React ,{useState,useCallback} from 'react'
import { useWindowDimensions } from 'react-native';
import { View, Text,Image, FlatList } from 'react-native'

import styles from './style';

const ImageCarousel = ({images}:{images:string[]}) => {

    const onFlatListUpdate=useCallback(({viewableItems}) => {
        if(viewableItems.length>0){
            setActiveState(viewableItems[0].index || 0)
        }
    },[]);

    const windowWidth = useWindowDimensions().width;
    const [activeState,setActiveState]=useState(0);

    return (
        <View>
            <FlatList 
            data={images}
            renderItem={({item})=>(<Image style={[styles.image,{width:windowWidth-40}]} source={{uri:item}}/>)}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={windowWidth-20}
            snapToAlignment={'center'}
            decelerationRate={'fast'}
            viewabilityConfig={{viewAreaCoveragePercentThreshold:50,}}
            onViewableItemsChanged={onFlatListUpdate}
            />

            <View style={styles.dots}>
                {images.map((image,index)=>(
                <View 
                style={[styles.dot,{
                    backgroundColor:index===activeState?'#c9c9c9':'#ededed'
                }
                ]}/>))}
                
            </View>
        </View>
    )
}

export default ImageCarousel;
