import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { showMessage } from 'react-native-flash-message';

import { Header, TextInput, Gap, Button } from '../components';



export default function SignIn({navigation}) {
    const [data, setData] = useState({
        name: null,
        password: null,
    });

    const signInPress = () => {
        if(data.name === "Jane Doe" && data.password !== null && data.password != '') {
            navigation.replace('HomeRouter');
        }
        else {
            showMessage(s.showMessage("Akun tidak terdaftar"));
        }
    }

    const createNewAccountPress = () => {
        navigation.push('SignUp');
    }

    return(
        <View style={styles.screen}>
            <Header title="Sign In" />
            <View style={styles.content}>
                <TextInput title="Email Address" placeholder="Type your email address" onChange={(val) => setData({name: val, password: data.password})}/>
                <Gap height={15} />
                <TextInput title="Password" placeholder="Type your password" secure={true} onChange={(val) => setData({name: data.name, password: val})} />
                <Gap height={25} />
                <Button text="Sign In" onPress={() => signInPress()} />
                <Gap height={10} />
                <Button type="secondary" text="Create New Account" onPress={() => createNewAccountPress()} />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    showMessage: (msg) => ({
        message: msg,
        type: 'default',
        backgroundColor: '#D9435E',
        color: '#FFFFFF',
    }),

    screen: {
        flex: 1,
        backgroundColor: '#FAFAFC',
    },
    content: {
        marginTop: 25,
        paddingTop: 25,
        paddingHorizontal: 25,
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 1)',
    }
});