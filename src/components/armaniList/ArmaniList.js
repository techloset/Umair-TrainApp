import React from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
} from 'react-native';
import { fontPixel, heightPixel, pixelSizeHorizontal, pixelSizeVertical, widthPixel } from '../../responsiveness/Responsiveness';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Chiko Armani',
        name: 'chiko@armani.com',
        group: 'Tambahkan penumpang',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Samsul Bahari',
        name: 'samsulbahari@mail.com',
        group: 'Tambah penumpang',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Chiko Armani',
        name: 'chiko@armani.com',
        group: 'Tambahkan penumpang',
    },
];

const Item = ({ title, name, group }) => (
    <View style={styles.item}>
        <View >

            <Text style={styles.title}>{title}</Text>
            <Text style={styles.name}>{name}</Text>
        </View>
        <Text style={styles.group}>{group}</Text>

    </View>
);

const ArmaniList = () => {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={({ item }) => <Item title={item.title} name={item.name} group={item.group} />}
                keyExtractor={item => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {

        // marginTop: StatusBar.currentHeight || 0,
        marginTop: pixelSizeVertical(10)
    },
    item: {
        backgroundColor: '#FFFFFF',
        paddingHorizontal: pixelSizeHorizontal(16),
        width: widthPixel(300),
        height: heightPixel(79),
        marginVertical: pixelSizeVertical(8),
        marginHorizontal: pixelSizeHorizontal(12),
        display: 'flex', flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        borderRadius: 16


    },
    title: {
        fontSize: fontPixel(14),
        color: '#59597C',
        fontFamily: 'PlusJakartaSans-Bold',
        marginBottom: pixelSizeVertical(5)
    },
    name: {
        color: '#88879C',
        fontSize: fontPixel(10),
        fontFamily: 'PlusJakartaSans-Regular',
    },
    group: {
        color: '#FFFFFF',
        textAlign: 'center',
        paddingTop: pixelSizeVertical(4),

        backgroundColor: '#FA8D34',
        width: widthPixel(132),
        height: heightPixel(26),
        borderRadius: 8,
        fontSize: fontPixel(10),
        fontFamily: 'PlusJakartaSans-Bold',
    }

});

export default ArmaniList;