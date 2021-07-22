import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems: 'center',
        width:100,
        justifyContent:'space-between',
        borderWidth:1,
        borderColor:'#e3e3e3',
        backgroundColor:'#fff',
    },
    quantity:{
        width:25,
        height:25,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#d1d1d1'
        
    },
    sign:{
        fontSize:16

    },
})


export default styles;