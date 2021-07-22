import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    root:{
        backgroundColor:'white',
        padding:10,
    },
    oldPrice:{
        textDecorationLine:'line-through',
        fontSize:13,
    },
    priceFrom:{
        fontSize:17
    },
    price:{
        fontWeight:'bold',
        fontSize:19,
    },
    description:{
        marginVertical:10,
        lineHeight:21,
        fontSize:15
    },
    quantity:{
        marginVertical:10,
    },
});

export default styles;