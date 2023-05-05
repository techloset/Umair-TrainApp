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
const SummaryList = () => {

    const DATA = [
        {
            id: '1',

            tips: <Calling text='Ekonomi - A' color='#FE9B4B' backgroundColor="#F4781433" borderRadius={4} paddingHorizontal={8} paddingVertical={4} />,

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
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 16, marginTop: 12, marginBottom: 18 }}>
                    <View>
                        <Text style={styles.title}>{title}</Text>
                        <View style={{ display: 'flex', flexDirection: 'row', marginTop: 12, alignItems: 'center', gap: 10 }}>
                            <View style={{ display: 'flex', gap: 4 }}>
                                <Text>PWT</Text>
                                <Text>14.00</Text>
                            </View>
                            <View>
                                <Image source={require('../../assets/ball.png')} style={{ width: 73, height: 6 }} />
                            </View>
                            <View style={{ display: 'flex', gap: 4 }}>
                                <Text>SLO</Text>
                                <Text>18.35add</Text>
                            </View>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', marginTop: 12, gap: 20 }}>

                            <Text style={styles.tips}>{tips}</Text>
                            <Text>{jam}</Text>
                        </View>
                    </View>
                    <View>

                        <Text style={styles.fair}>{fair}</Text>
                        <Text style={{ color: '#88879C', fontSize: 10, marginTop: 5, fontFamily: 'PlusJakartaSans-Normal', display: 'flex', textAlign: 'right' }}>{sisa}</Text>
                        <View style={{ display: 'flex', flexDirection: 'row-reverse', marginTop: 41 }}>
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


        marginHorizontal: 16,
        marginVertical: 16

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

export default SummaryList;