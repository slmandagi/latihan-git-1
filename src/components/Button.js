import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';



export default function Button({type='Primary', text="<Button_Text>", onPress=null}) {
    return(
        <TouchableOpacity style={styles.container(type)} activeOpacity={0.5} onPress={onPress}>
            <Text style={styles.text(type)}>{text}</Text>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    container: (type) => ({
        paddingVertical: 10,
        alignItems: 'center',
        backgroundColor: (type === 'Primary') ? '#02CF8E' : '#8D92A3',
        borderRadius: 10,
    }),
    text: (type) => ({
        fontFamily: 'Poppins-Medium',
        color: (type === 'Primary') ? '#020202' : '#FFFFFF',
        fontSize: 15,
    }),
});