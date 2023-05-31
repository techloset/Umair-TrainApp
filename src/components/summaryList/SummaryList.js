import React from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    ScrollView,
    Text,
    StatusBar,
    image,
    Image
} from 'react-native';
import Calling from '../largeList/Calling';

import Arrow from '../flatList/Arrow';
import { fontPixel, heightPixel, pixelSizeHorizontal, pixelSizeVertical, widthPixel } from '../../responsiveness/Responsiveness';
const SummaryList = () => {

    const DATA = [
        {
            id: '1',

            tips: <Calling text='Ekonomi - A' color='#FE9B4B' backgroundColor="#F4781433" borderRadius={4} width={widthPixel(75)} height={heightPixel(18)} />,

            title: 'Joglosemarkerto',
            fair: 'Rp149.000',
            sisa: '1 penumpang',
            jam: '6 jam 35 menit',
            // hello: <Hello image={require('../../assets/phone.png')} width={107} height={107} />
            arrow: <Arrow />
        },



    ];

    const Item = ({ title, tips, arrow, fair, sisa, jam }) => (
        <View style={styles.item}>
            <View style={{}}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: pixelSizeHorizontal(16), marginTop: pixelSizeVertical(12), marginBottom: pixelSizeVertical(18) }}>
                    <View>
                        <Text style={styles.title}>{title}</Text>
                        <View style={{ display: 'flex', flexDirection: 'row', marginTop: pixelSizeVertical(12), alignItems: 'center', gap: 10 }}>
                            <View style={{ display: 'flex', gap: 4 }}>
                                <Text style={{ fontSize: fontPixel(10), fontFamily: 'PlusJakartaSans-Normal', color: '#88879C' }}>PWT</Text>
                                <Text style={{ fontSize: fontPixel(10), fontFamily: 'PlusJakartaSans-Normal', color: '#88879C' }}>14.00</Text>
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
                                <View style={{ width: widthPixel(6), height: heightPixel(6), borderRadius: 6, backgroundColor: '#FFFFFF00', borderWidth: 1, borderColor: '#E0E0E0' }}></View>
                                <Text style={{ textAlign: 'center', justifyContent: 'center', marginBottom: 2, color: '#E0E0E0' }} > -  -  -  - </Text>
                                <View style={{ width: widthPixel(6), height: heightPixel(6), borderRadius: 6, backgroundColor: '#2D9CDB', borderWidth: 1, borderColor: '#2F80ED' }}></View>
                            </View>
                            <View style={{ display: 'flex', gap: 4 }}>
                                <Text style={{ fontSize: fontPixel(10), fontFamily: 'PlusJakartaSans-Normal', color: '#88879C' }}>SLO</Text>
                                <Text style={{ fontSize: fontPixel(10), fontFamily: 'PlusJakartaSans-Normal', color: '#88879C' }}>18.35add</Text>
                            </View>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', marginTop: pixelSizeVertical(12), gap: 20 }}>

                            <Text style={styles.tips}>{tips}</Text>
                            <Text>{jam}</Text>
                        </View>
                    </View>
                    <View>

                        <Text style={styles.fair}>{fair}</Text>
                        <Text style={{ color: '#88879C', fontSize: fontPixel(10), marginTop: pixelSizeVertical(10), fontFamily: 'PlusJakartaSans-Normal', display: 'flex', textAlign: 'right' }}>{sisa}</Text>
                        <View style={{ display: 'flex', flexDirection: 'row-reverse', marginTop: pixelSizeVertical(41) }}>
                            {arrow}
                        </View>
                    </View>
                </View>


            </View>



        </View >
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={({ item }) => <Item title={item.title} tips={item.tips} arrow={item.arrow} fair={item.fair} sisa={item.sisa} jam={item.jam} />}
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

        backgroundColor: '#FFFFFF',
        borderRadius: 8,


        marginHorizontal: pixelSizeHorizontal(16),
        marginVertical: pixelSizeVertical(16)

    },
    title: {
        fontSize: fontPixel(14),
        color: '#59597C',
        fontFamily: 'PlusJakartaSans-Bold',

    },
    fair: {
        fontSize: fontPixel(12),
        color: '#59597C',
        fontFamily: 'PlusJakartaSans-Bold',
    },
    tips: {
        fontSize: fontPixel(36)
    }
});

export default SummaryList;