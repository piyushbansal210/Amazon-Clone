import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    root:{
        borderColor:'#d1d1d1',
        borderWidth:1,
        borderRadius:5,
        padding:5,
        shadowOpacity:0,
        elevation:0,
        backgroundColor:'#fff',
        marginVertical:4
    },
    row:{
        flexDirection:'row',
    },
    image:{
        flex:2,
        height:150,
        resizeMode:'contain'

    },
    rightContainer:{
        padding:6,
        flex:3,
    },
    title:{
        fontSize:18
    },
    price:{
        fontWeight:'bold',
        fontSize:19,
    },
    rating:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:6
    },
    priceFrom:{
        fontSize:17
    },
    star:{
        marginLeft:4
    },
    oldPrice:{
        textDecorationLine:'line-through',
        fontSize:13,
    },
    quantity:{
        margin:10,
    },
})

export default styles;
