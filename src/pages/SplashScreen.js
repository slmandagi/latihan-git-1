import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { MoneyTracker as Icon } from '../assets/icons';


export default function SplashScreen({navigation}) {
    useEffect(() => {
        setTimeout(() => navigation.replace('SignIn'), 250);
    }, []);

    return(
        <View style={styles.screen}>
            <Icon />
            <Text style={styles.text}>MoneyTracker</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#02CF8E',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontFamily: 'Poppins-Medium',
        color: '#020202',
        fontSize: 30,
    },
});
