import React from 'react';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from 'react-native';

import { Home as IconHome, Idk } from '../assets/icons';
import { Person } from '../assets/images';
import { Header, Gap, Button } from '../components';



export default function Home({navigation}) {
    return(
        <View style={styles.screen}>
            <Header title="Money Tracker" subTitle="Track your money" profile={Person} />
            <ScrollView style={styles.contentWrap}>
                <View style={styles.content}>
                    <Text style={styles.title}>Your Balance</Text>
                    <Gap height={5} />
                    <Text style={styles.money}>Rp. 10.000.000</Text>
                    <Gap height={20} />
                    <View style={styles.horizontalLine} />
                    <Gap height={20} />
                    <View style={styles.textWrap}>
                        <View>
                            <Text style={styles.text(false)}>Cash on Hand</Text>
                            <Text style={styles.text(false)}>Cash on Bank</Text>
                        </View>
                        <View style={styles.textRight}>
                            <Text style={styles.text(true)}>Rp 4.000.000</Text>
                            <Text style={styles.text(true)}>Rp 6.000.000</Text>
                        </View>
                    </View>
                </View>
                <Gap height={20} />
                <View style={styles.content}>
                    <Text style={styles.title}>Add Transaction</Text>
                    <Gap height={10} />
                    <Button text="Cash On Hand" onPress={() => navigation.push('CashOnHand')} />
                    <Gap height={20} />
                    <Button text="Cash On Bank" onPress={() => navigation.push('CashOnBank')} />
                </View>
            </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    contentWrap: {
        flex: 1,
        marginVertical: 25,
    },
    content: {
        paddingTop: 15,
        paddingBottom: 50,
        paddingHorizontal: 25,
        backgroundColor: '#FFFFFF',
    },
    title: {
        fontFamily: 'Poppins-Medium',
        color: '#000000',
        fontSize: 15,
    },
    money: {
        textAlign: 'center',
        fontFamily: 'Poppins-SemiBold',
        color: '#000000',
        fontSize: 25,
    },
    textWrap: {
        flexDirection: 'row',
    },
    textRight: {
        marginLeft: 20,
    },
    text: (money) => ({
        fontFamily: (money) ? 'Poppins-Medium' : 'Poppins-Regular',
        color: '#000000',
        fontSize: 15,
    }),
    horizontalLine: {
        borderBottomWidth: 1,
        borderBottomColor: '#000000',
    },
    tab: {
        paddingVertical: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#FFFFFF',
    }
});