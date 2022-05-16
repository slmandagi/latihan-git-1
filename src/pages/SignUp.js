import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { showMessage } from 'react-native-flash-message';

import { DefaultProfile } from '../assets/images';
import { Header, Gap, TextInput, Button } from '../components';



export default function SignUp({navigation}) {
    const [data, setData] = useState({
        name: null,
        email: null,
        password: null,
    });
    const [image, setImage] = useState(DefaultProfile);

    const addimagePress = async () => {
        const result = await launchImageLibrary({
            maxHeight: 200,
            maxWidth: 200,
            includeBase64: true,
        });

        if(result.didCancel) {
            setImage(DefaultProfile);
            showMessage(s.showMessage("Gagal mengunggah gambar"));
        }
        else {
            setImage({uri : result.assets[0].uri});
        }
    }

    const nameChange = (val) => {
        setData({
            name: val,
            email: data.email,
            password: data.password,
        });
    }

    const emailChange = (val) => {
        setData({
            name: data.name,
            email: val,
            password: data.password,
        });
    }

    const passwordChange = (val) => {
        setData({
            name: data.name,
            email: data.email,
            password: val,
        });
    }

    const continuePress = () => {
        if(data.name === 'Jane Doe') {
            showMessage(s.showMessage("Nama sudah terdaftar pada aplikasi"));
        }
        else {
            if(data.email === 'jane@gmail.com') {
                showMessage(s.showMessage("Email sudah terdaftar pada aplikasi"));
            }
            else {
                navigation.reset({routes: [{name: 'HomeRouter'}]})
            }
        }
    }

    return(
        <View style={styles.screen}>
            <Header back={true} onPress={() => navigation.goBack()} title="Sign Up" />
            <View style={styles.content}>
                <View style={styles.imageCover}>
                    <TouchableOpacity style={styles.imageWrap} activeOpacity={0.5} onPress={addimagePress}>
                        <Image source={(image === DefaultProfile) ? DefaultProfile : {uri:image}} style={s.image} />
                    </TouchableOpacity>
                </View>
                <Gap h={15} />
                <TextInput title="Full Name" placeholder="Type your full name" onChange={(val) => nameChange(val)} />
                <Gap h={15} />
                <TextInput title="Email Address" placeholder="Type your email address" onChange={(val) => emailChange(val)} />
                <Gap h={15} />
                <TextInput title="Password" placeholder="Type your password" secure={true} onChange={(val) => passwordChange(val)} />
                <Gap h={25} />
                <Button text="Continue" onPress={() => continuePress()} />
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
    },
    content: {
        marginTop: 25,
        paddingTop: 25,
        paddingHorizontal: 25,
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    imageCover: {
        height: 110,
        width: 110,
        padding: 10,
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: '#8D92A3',
        borderStyle: 'dashed',
        borderRadius: 110/2,
    },
    image: {
        height: 90,
        width: 90,
        alignSelf: 'center',
        borderRadius: 90/2,
    },
    imageText: {
        fontFamily: 'Poppins-Light',
        color: '#8D92A3',
        fontSize: 15,
        textAlign: 'center',
    },
});