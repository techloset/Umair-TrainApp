import React from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
    Pressable,
    Image
} from 'react-native';

import Besok from './Besok'
import Arrow from './Arrow';
const App = () => {

    const DATA = [
        {
            id: '1',
            title: 'Bengawan',
            name: 'PWT - LPY',
            data: <Besok name='Besok' backgroundColor="#FA8C33" width={47} color="white" />,

            arrow: <Arrow />
        },

        {
            id: '2',
            title: 'Bima',
            name: 'YK - PWT',
            data: <Besok name='7 hari' backgroundColor="#E0F3FF" width={42} color='#85D3FF' />,

            arrow: <Arrow />

        },
        {
            id: '3',
            title: 'Joglosemarkerto',
            name: 'PK - LNW',
            data: <Besok name='Bolan' backgroundColor="#FA8C33" width={47} color="white" />,

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

        // marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        backgroundColor: 'white',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        width: 248,
        height: 86,
        borderRadius: 16
    },
    title: {
        fontSize: 14,
        fontFamily: 'PlusJakartaSans-Bold',
    },


    name: {
        color: '#88879C',
        fontSize: 10,
        fontFamily: 'PlusJakartaSans-Regular'
    }
});

export default App;