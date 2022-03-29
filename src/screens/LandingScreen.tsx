import React, {useState, useReducer, useEffect} from 'react'
import {View, Text, StyleSheet, Image, Dimensions} from "react-native"
import * as Location from 'expo-location';

const screenWidth = Dimensions.get('screen').width;
interface ILocation {
    latitude: number;
    longitude: number;
}

export const LandingScreen = () => {


    const [errorMsg, setErrorMsg] = useState("");
   const [address, setAddress] = useState<Location.LocationGeocodedAddress>();

   console.log(address);

    const [displayAddress, setDisplayAddress] = useState("")

    useEffect(()=>{
        (async () => {

            let {status}: any = await Location.requestForegroundPermissionsAsync();
            console.log('status');

            if(status !== 'granted') {
                                setErrorMsg('Permission to access location is not granted');
            }
            let location: any = await Location.getCurrentPositionAsync({});
            const {coords} = location


            if(coords){
                const {latitude, longitude} = coords;

                let addressResponse: any = await  Location.reverseGeocodeAsync({latitude, longitude});
            }
            else {

            }

        })
    },[] )


    return (
        <View style={styles.container}>
            <View style={styles.navigation}/>
                   <View style={styles.body}>
                <Image source={require('../images/delivery_icon.png')} style={styles.deliveryIcon}/>
                <View style={styles.addressContainer}>
                    <Text style={styles.addressTitle}>Your Delivery Address</Text>
                </View>
                       <Text style={styles.addressText}>Waiting for Current Location</Text>
            </View>

            <View style={styles.footer}/>
        </View>
    )
}

const styles =  StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'rgba(242, 242,242, 1)'
    },
    navigation: {
        flex:2,
            },
    body:{
        flex:9,
        justifyContent:'center',
        alignItems:'center',
          },
    deliveryIcon: {
        width:120,
        height:120
    },
    addressContainer: {
          width:screenWidth - 100,
          borderBottomColor:'red',
        borderBottomWidth:0.5,
        padding:5,
        marginBottom:10,
        alignItems:'center',
    },
    addressTitle: {
        fontSize:24,
        fontWeight:'700',
        color:'#7d7d7d',
    },
    addressText: {
      fontSize:20,
      fontWeight:'200',
        color:'#4f4f4f'
    },
    footer: {
        flex:1,
      }
})
/*
Clear watchman watches: watchman watch-del-all
2. Delete node_modules and run yarn install
3. Reset Metro's cache: yarn start --reset-cache
4. Remove the cache: rm -rf /tmp/metro-*
*/
