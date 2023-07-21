import React from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,

} from 'react-native';

import Besok from './Besok'
import Arrow from './Arrow';
import { fontPixel, heightPixel, pixelSizeHorizontal, pixelSizeVertical, widthPixel } from '../../responsiveness/Responsiveness';

const App = () => {

    const DATA = [
        {
            id: '1',
            title: 'Bengawan',
            name: 'PWT - LPY',
            data: <Besok name='Besok' shadowColor="#ed0f0f" style={[styles.Besok, { borderRadius: 8 }]}
            />
            ,
            arrow: <Arrow />
        },

        {
            id: '2',
            title: 'Bima',
            name: 'YK - PWT',
            data: <Besok name='7 hari' style={styles.Hari} />,

            arrow: <Arrow />

        },
        {
            id: '3',
            title: 'Joglosemarkerto',
            name: 'PK - LNW',
            data: <Besok name='Bolan' style={styles.Hari} />,

            arrow: <Arrow />
        },
    ];

    const Item = ({ title, name, data, arrow, }) => (
        <View style={styles.item}>

            <View>{data}</View>
            <View style={{ display: 'flex', gap: 7 }}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.name}>{name}</Text>
            </View>
            <View>{arrow}</View>


        </View>
    );


    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={({ item }) => <Item title={item.title} name={item.name} data={item.data} arrow={item.arrow} />}
                keyExtractor={item => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',


    },
    item: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: pixelSizeHorizontal(20),
        marginVertical: pixelSizeVertical(8),
        marginHorizontal: pixelSizeHorizontal(16),
        width: widthPixel(248),
        height: heightPixel(86),
        borderRadius: 16,
        shadowColor: "#1582BF",

        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.17,
        shadowRadius: 2.54,
        elevation: 3
    },
    title: {
        fontSize: fontPixel(14),
        fontFamily: 'PlusJakartaSans-Bold',
    },


    name: {
        color: '#88879C',
        fontSize: fontPixel(10),
        fontFamily: 'PlusJakartaSans-Regular'
    },
    Besok: {
        backgroundColor: '#FE9B4B',
        width: widthPixel(47),
        height: heightPixel(26),
        textAlign: 'center',
        color: "white",
        paddingTop: pixelSizeVertical(2),
        shadowColor: "#FE9B4B",
        shadowOffset: {
            width: 0,
            height: 13,
        },
        shadowOpacity: 0.24,
        shadowRadius: 14.86,
        elevation: 18
    },
    Hari: {
        backgroundColor: "#E0F3FF", width: widthPixel(42),
        height: heightPixel(26),
        color: '#85D3FF',
        borderRadius: 8,
        textAlign: 'center',
        paddingTop: pixelSizeVertical(2),
    }

});

export default App;