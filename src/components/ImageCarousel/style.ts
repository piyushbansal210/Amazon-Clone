import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    image:{
        height:250,
        resizeMode:'contain',
        padding:40
    },
    dots:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    dot:{
        width:10,
        height:10,
        borderRadius:25,
        borderColor:'#c9c9c9',
        borderWidth:1,
        margin:10,
        backgroundColor:'#ededed'
    },
})

export default styles;
