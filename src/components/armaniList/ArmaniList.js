import React from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
} from 'react-native';

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
        marginTop: 10
    },
    item: {
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 16,
        width: 300,
        height: 79,
        marginVertical: 8,
        marginHorizontal: 12,
        display: 'flex', flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        borderRadius: 16


    },
    title: {
        fontSize: 14,
        color: '#59597C',
        fontFamily: 'PlusJakartaSans-Bold',
        marginBottom: 5
    },
    name: {
        color: '#88879C',
        fontSize: 10,
        fontFamily: 'PlusJakartaSans-Regular',
    },
    group: {
        color: '#FFFFFF',
        textAlign: 'center',
        paddingTop: 4,

        backgroundColor: '#FA8D34',
        width: 132,
        height: 26,
        borderRadius: 8,
        fontSize: 10,
        fontFamily: 'PlusJakartaSans-Bold',
    }

});

export default ArmaniList;