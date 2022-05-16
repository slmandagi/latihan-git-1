import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from 'react-native';

import { Header, TextInput, Gap, Button } from '../components';



export default function CashOnHand({navigation}) {
    const [data, setData] = useState([
        {id: 1, date: "17 April 2020", items: ["Water", "Food"], price: -300000},
        {id: 2, date: "18 April 2020", items: ["Office supplies"], price: -300000},
        {id: 3, date: "19 April 2020", items: ["Top Up"], price: 300000},
    ]);

    const items = (data) => {
        return(
            data.map((r, index) => (
                <View key={r.id}>
                    <TouchableOpacity style={styles.items} activeOpacity={0.5}>
                        <View>
                            <Text style={styles.textDate}>{r.date}</Text>
                            <Text style={styles.textItem}>{r.items.join(', ')}</Text>
                        </View>
                        <Text style={styles.textMoney(r.price)}>Rp. {r.price}</Text>
                    </TouchableOpacity>
                    {(index-1 !== data.length) && <Gap h={10} />}
                </View>
            ))
        );
    }

    return(
        <View style={s.screen}>
            <Header back={true} onPress={() => navigation.goBack()} title="Cash On Hand" />
            <ScrollView style={styles.contentWrap}>
                <View style={styles.content}>
                    <TextInput title="Description" placeholder="Add the description" />
                    <Gap height={15} />
                    <TextInput title="Type" placeholder="Debit / Credit" />
                    <Gap height={20} />
                    <Button text="Save" />
                </View>
                <Gap height={25} />
                <View style={styles.content}>
                    <Text style={styles.title}>Last 3 Transactions</Text>
                    {items(data)}
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
        marginTop: 25,
    },
    content: {
        paddingTop: 15,
        paddingBottom: 50,
        paddingHorizontal: 25,
        backgroundColor: '#FFFFFF',
    },
    items: {
        padding: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        shadowColor: '#00000040',
        elevation: 2.5,
    },
    title: {
        fontFamily: 'Poppins-Bold',
        color: '#020202',
        fontSize: 15,
    },
    textDate: {
        fontFamily: 'Poppins-Regular',
        color: '#8D92A3',
        fontSize: 15,
    },
    textItem: {
        fontFamily: 'Poppins-Regular',
        color: '#020202',
        fontSize: 15,
    },
    textMoney: (val) => ({
        alignSelf: 'center',
        fontFamily: 'Poppins-Bold',
        color: (val < 0) ? '#D9435E' : (val === 0) ? '#020202' : '#1ABC9C',
        fontSize: 15,
    }),
});