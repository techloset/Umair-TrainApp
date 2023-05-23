import React from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    ScrollView,
    image,
    Image,
    TouchableOpacity
} from 'react-native';
import Calling from '../largeList/Calling';

import Arrow from '../flatList/Arrow';
import { color } from '@rneui/base';
const FairList = () => {

    const DATA = [
        {
            id: '1',

            tips: <Calling text='Ekonomi - A' color='#FE9B4B' backgroundColor="#F4781433" borderRadius={4} width={75} height={18} />,

            title: 'Joglosemarkerto',
            fair: 'Rp149.000',
            sisa: 'Sisa 2',
            jam: '6 jam 35 menit',
            arrivalTime: '14.00',
            departureTime: '18.35',
            // hello: <Hello image={require('../../assets/phone.png')} width={107} height={107} />
            arrow: <Arrow />
        },

        {
            id: '2',

            tips: <Calling text='Ekonomi - C' color='#FE9B4B' backgroundColor="#F4781433" borderRadius={4} width={75} height={18} />,

            title: 'Joglosemarkerto',
            fair: 'Rp74.000',
            sisa: 'Sisa 24',
            jam: '5 jam 35 menit',
            arrivalTime: '06.30',
            departureTime: '11.35',
            // hello: <Hello image={require('../../assets/phone.png')} width={107} height={107} />
            arrow: <Arrow />
        },
        {
            id: '3',

            tips: <Calling text='Ekonomi - A' color='#FE9B4B' backgroundColor="#F4781433" borderRadius={4} width={75} height={18} />,

            title: 'Bima',
            fair: 'Rp335.000',
            sisa: 'Sisa 26',
            jam: '3 jam 35 menit',
            arrivalTime: '03.00',
            departureTime: '06.35',
            // hello: <Hello image={require('../../assets/phone.png')} width={107} height={107} />
            arrow: <Arrow />
        },
        {
            id: '4',

            tips: <Calling text='Ekonomi - B' color='#FE9B4B' backgroundColor="#F4781433" borderRadius={4} width={75} height={18} />,

            title: 'Bengawan',
            fair: 'Rp129.000',
            sisa: 'Sisa 28',
            jam: '4 jam 35 menit',
            arrivalTime: '05.00',
            departureTime: '9.35',
            // hello: <Hello image={require('../../assets/phone.png')} width={107} height={107} />
            arrow: <Arrow />
        },
        {
            id: '5',

            tips: <Calling text='Ekonomi - D' color='#FE9B4B' backgroundColor="#F4781433" borderRadius={4} width={75} height={18} />,

            title: 'Joglosemarkerto',
            fair: 'Rp149.000',
            sisa: 'Sisa 2',
            jam: '2 jam 35 menit',
            arrivalTime: '14.00',
            departureTime: '18.35',
            // hello: <Hello image={require('../../assets/phone.png')} width={107} height={107} />
            arrow: <Arrow />
        },
        {
            id: '6',

            tips: <Calling text='Ekonomi - D' color='#FE9B4B' backgroundColor="#F4781433" borderRadius={4} width={75} height={18} />,

            title: 'Joglosemarkerto',
            fair: 'Rp149.000',
            sisa: 'Sisa 2',
            jam: '6 jam 35 menit',
            arrivalTime: '14.00',
            departureTime: '18.35',
            // hello: <Hello image={require('../../assets/phone.png')} width={107} height={107} />
            arrow: <Arrow />
        },

    ];

    const Item = ({ title, tips, arrow, fair, sisa, jam, arrivalTime, departureTime }) => (


        <ScrollView style={styles.item}>


            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 16, marginTop: 12, marginBottom: 18 }}>
                <View>
                    <Text style={styles.title}>{title}</Text>
                    <View style={{ display: 'flex', flexDirection: 'row', marginTop: 12, alignItems: 'center', gap: 10 }}>
                        <View style={{ display: 'flex', gap: 4 }}>
                            <Text style={{ fontSize: 10, fontFamily: 'PlusJakartaSans-Normal', color: '#88879C' }}>PWT</Text>
                            <Text style={{ fontSize: 10, fontFamily: 'PlusJakartaSans-Normal', color: '#88879C' }}>{arrivalTime}</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
                            <View style={{ width: 6, height: 6, borderRadius: 6, backgroundColor: '#FFFFFF00', borderWidth: 1, borderColor: '#E0E0E0' }}></View>
                            <Text style={{ textAlign: 'center', justifyContent: 'center', marginBottom: 2, color: '#E0E0E0' }} > -  -  -  - </Text>
                            <View style={{ width: 6, height: 6, borderRadius: 6, backgroundColor: '#2D9CDB', borderWidth: 1, borderColor: '#2F80ED' }}></View>
                        </View>
                        <View style={{ display: 'flex', gap: 4 }}>
                            <Text style={{ fontSize: 10, fontFamily: 'PlusJakartaSans-Normal', color: '#88879C' }}>SLO</Text>
                            <Text style={{ fontSize: 10, fontFamily: 'PlusJakartaSans-Normal', color: '#88879C' }}>{departureTime}</Text>
                        </View>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', marginTop: 12, gap: 20 }}>

                        <Text style={styles.tips}>{tips}</Text>
                        <Text>{jam}</Text>
                    </View>
                </View>
                <View>

                    <Text style={styles.fair}>{fair}</Text>
                    <Text style={{ color: '#EB5757', fontSize: 10, marginTop: 5, fontFamily: 'PlusJakartaSans-Bold', display: 'flex', textAlign: 'right' }}>{sisa}</Text>
                    <View style={{ display: 'flex', flexDirection: 'row-reverse', marginTop: 41 }} >
                        {arrow}
                    </View>
                </View>
            </View>



        </ScrollView>




    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={({ item }) => <Item title={item.title} tips={item.tips} arrow={item.arrow} fair={item.fair} sisa={item.sisa} jam={item.jam} arrivalTime={item.arrivalTime} departureTime={item.departureTime} />}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={true}
                alwaysBounceVertical={true}

            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {

        // marginTop: StatusBar.currentHeight || 0,


    },
    item: {
        display: 'flex',
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        flex: 1,

        marginHorizontal: 16,
        marginVertical: 16,



    },
    title: {
        fontSize: 14,
        color: '#59597C',
        fontFamily: 'PlusJakartaSans-Bold',

    },
    fair: {
        fontSize: 12,
        color: '#59597C',
        fontFamily: 'PlusJakartaSans-Bold',
    },
    tips: {
        fontSize: 36
    }
});

export default FairList;