import React from 'react'
import { View, Text, Pressable } from 'react-native'

import styles from './style';

interface buttonProps{
    text:string,
    onPress:()=>void,
    containerStyle?:object
}


const Button = ({text,onPress,containerStyle}:buttonProps) => {

    return (

        
        <Pressable style={[styles.buttonContainer,containerStyle]} onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    )
}

export default Button;

