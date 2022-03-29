import React from 'react'
import {View, Text, StyleSheet, Image} from "react-native"

export const HomeScreen = () => {

    return (
        <View style={styles.container}>
            <View style={styles.navigation}>
                <Text>Navigation</Text>
            </View>
            <View style={styles.body}>
                <Image source={require('../images/delivery_icon.png')} style={styles.deliveryIcon}/>
                <Text>Landing Screen</Text>
            </View>
            <View style={styles.footer}>
                <Text>Footer</Text>
            </View>

        </View>
    )
}

const styles =  StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'green'
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
    footer: {
        flex:1,
        backgroundColor:'cyan'
    }
})
