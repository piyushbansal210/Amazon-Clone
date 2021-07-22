import React,{useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import { View, Text ,TextInput,Alert,ScrollView } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Button from '../../components/Button';

import styles from './style';

import countries from '../../assets/data/countries';



const AddressScreen = () => {

    const [country,setCountry]=useState(countries[0].code)

    const[fullname,setFullname]=useState('');
    const[phone,setPhone]=useState('');
    const[address,setAddress]=useState('');
    const[city,setCity]=useState('');

    const [addressError,setAddressError]=useState('');
    

    const onCheckOut=()=>{
        if(!fullname && !phone){
            Alert.alert('Please fill the fullname and Phone Number field')
        }
        else if(!fullname){
            Alert.alert('Please fill the fullname field')
        }
        else if(!phone){
            Alert.alert('Please fill the Phone field')
        }
        else if (!fullname || !phone || !setAddressError || !city){
            Alert.alert('Fix All fields properly')
        }
    };

    const validatingAddress=()=>{
        if(address.length<3){
            setAddressError('Address is too short')
        }
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.row}>
            <Picker selectedValue={country} onValueChange={(itemValue)=>setCountry(itemValue)} style={{height:40}}>
                {countries.map(country=>(
                    <Picker.Item value={country.code} label={country.name}/>
                ))}
            </Picker>
            </View>


            <View style={styles.name}>
                <Text style={styles.label}>Full Name (First and Last Name)</Text>
                <TextInput
                style={styles.input}
                placeholder={'Full Name'}
                value={fullname}
                onChangeText={setFullname}/>
            </View>


            <View style={styles.phone}>
                <Text style={styles.label}>Phone Number</Text>
                <TextInput
                style={styles.input}
                placeholder={'Phone Number'}
                keyboardType={'phone-pad'}
                value={phone}
                onChangeText={setPhone}/>
            </View>


            <View style={styles.address}>
                <Text style={styles.label}>Address</Text>
                <TextInput
                style={styles.input}
                placeholder={'Address'}
                value={address}
                onEndEditing={validatingAddress}
                onChangeText={text=>{
                    setAddress(text);
                    setAddressError('');
                    }}/>
                {!!addressError && (<Text style={{color:'red'}}>{addressError}</Text>)}
            </View>

            <View style={styles.city}>
                <Text style={styles.label}>City</Text>
                <TextInput
                style={styles.input} 
                placeholder={'City'}
                value={city}
                onChangeText={setCity}/>
            </View>
            <View>
                
            </View>

            <Button text={'Use This Address'} onPress={onCheckOut} containerStyle={{marginTop:15}}/>
            
        </ScrollView>
    )
}

export default AddressScreen;
