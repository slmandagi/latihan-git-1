import React from 'react';
import { StyleSheet, View, Text, TextInput as RN_TextInput } from 'react-native';


export default function TextInput({title="<Header_Title>", placeholder="<Header_Placeholder>", secure=false, onChange=null}) {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <RN_TextInput style={styles.textInput} placeholder={placeholder} secureTextEntry={secure} onChangeText={onChange} />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        
    },
    title: {
        marginBottom: 5,
        fontFamily: 'Poppins-Regular',
        color: '#020202',
        fontSize: 15,
    },
    textInput: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 7.5,
        borderColor: '#020202',

        fontFamily: 'Poppins-Regular',
        color: '#8D92A3',
        fontSize: 15,
    },
});
