import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

import { Back } from '../assets/icons';


export default function Header({back=false, onPress=null, title="<Title>", subTitle=null, profile=null}) {
    return(
        <View style={styles.container}>
            <View style={styles.leftWrap}>
                {(back) && <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
                    <Back style={styles.back} />
                </TouchableOpacity> }
                <View style={styles.titleWrap}>
                    <Text style={styles.title}>{title}</Text>
                    {(subTitle) && <Text style={styles.subTitle}>{subTitle}</Text>}
                </View>
            </View>
            <Image source={profile} style={styles.profile} />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        height: 100,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    leftWrap: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    back: {
        marginLeft: 25,
    },
    titleWrap: {
        marginLeft: 25,
    },
    title: {
        fontFamily: 'Poppins-Medium',
        color: '#020202',
        fontSize: 20,
    },
    subTitle: {
        fontFamily: 'Poppins-Light',
        color: '#8D92A3',
        fontSize: 15,
    },
    profile: {
        height: 50,
        width: 50,
        marginRight: 25,
        borderRadius: 10,
    },
});
