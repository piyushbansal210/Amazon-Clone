import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    root:{
        borderColor:'#d1d1d1',
        borderWidth:1,
        borderRadius:10,
        flexDirection:'row',
        shadowOpacity:0,
        elevation:0,
        backgroundColor:'#fff',
        marginVertical:4,
    },
    image:{
        flex:2,
        height:150,
        borderRadius:10,
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
})

export default styles;
