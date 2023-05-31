import React from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
    image
} from 'react-native';
import Calling from './Calling';
import Hello from './Image'
import { fontPixel, heightPixel, pixelSizeHorizontal, pixelSizeVertical, widthPixel } from '../../responsiveness/Responsiveness';
const Large = () => {

    const DATA = [
        {
            id: '1',
            title: 'Tetap jaga komunikasi selama di kereta',

            tips: <Calling text='Tips' color='#85D3FF' backgroundColor="#E0F3FF" borderRadius={4} paddingHorizontal={pixelSizeHorizontal(8)} paddingVertical={pixelSizeVertical(4)} />,
            hello: <Hello image={require('../../assets/Call.png')} width={widthPixel(100)} height={heightPixel(100)} />
        },

        {
            id: '2',
            title: 'Protokol kesehatan di kereta',
            tips: <Calling text='Update' color='#FE9B4B' backgroundColor="#F4781433" borderRadius={4} paddingHorizontal={pixelSizeHorizontal(8)} paddingVertical={pixelSizeVertical(4)} />,
            hello: <Hello image={require('../../assets/Hand2.png')} width={widthPixel(100)} height={heightPixel(100)} />
        },

    ];

    const Item = ({ title, tips, hello }) => (
        <View style={styles.item}>
            <View style={{ gap: 8 }}>

                <Text style={styles.tips}>{tips}</Text>
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={{ marginHorizontal: pixelSizeHorizontal(8) }}>
                {hello}
            </View>


        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={({ item }) => <Item title={item.title} tips={item.tips} hello={item.hello} />}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        width: widthPixel(262),
        height: heightPixel(171),
        marginVertical: pixelSizeVertical(8),
        marginHorizontal: pixelSizeHorizontal(16),
        justifyContent: 'space-between',
        paddingHorizontal: pixelSizeHorizontal(24),
        alignContent: 'center',
        alignItems: 'center'

    },
    title: {
        fontSize: fontPixel(14),
        color: '#333E63',
        fontFamily: 'PlusJakartaSans-Bold',
        width: widthPixel(114),
        height: heightPixel(72),
        lineHeight: heightPixel(24)
    },
    tips: {
        fontSize: fontPixel(36)
    }
});

export default Large;