import React, { useState, useEffect } from 'react';
import {
    FlatList,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const DateList = () => {
    const [selectedId, setSelectedId] = useState();
    useEffect(() => {
        return setSelectedId('3')

    }, [])
    const handlePress = (id) => {
        setSelectedId(id)
    }


    const DATA = [
        {
            id: '1',
            title: '15',
            name: 'SAB'
        },
        {
            id: '2',
            title: '16',
            name: 'MIN'
        },
        {
            id: '3',
            title: '17',
            name: 'SEN'
        },
        {
            id: '4',
            title: '18',
            name: 'SEL'
        },
        {
            id: '5',
            title: '19',
            name: 'REB'
        },
        {
            id: '6',
            title: '19',
            name: 'ZEM'
        },
        {
            id: '7',
            title: '20',
            name: 'KEL'
        },
    ];

    const Item = ({ item, onPress, backgroundColor, textColor, selected }) => (


        <TouchableOpacity onPress={() => handlePress(item.id)} style={[
            styles.item, selected ? styles.hover : null,
        ]}>
            <LinearGradient colors={item.id == selectedId ? ['#85D3FF', '#2596D7'] : ['white', 'white']} style={styles.textShadow}>
                <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
                <Text style={[styles.name, { color: textColor }]}>{item.name}</Text>

            </LinearGradient>
        </TouchableOpacity>

    );


    const renderItem = ({ item, selected }) => {
        // const backgroundColor = item.id === selectedId ? '#85D3FF' : 'white';
        const shadowColor = item.id === selectedId ? styles.hover : null
        const color = item.id === selectedId ? 'white' : 'black';
        // const backgroundGradient = item.id === selectedId ? stateColor : stateColor
        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item.id)}
                // backgroundColor={backgroundColor}
                textColor={color}
                selected={item.id === selectedId}
            // backgroundGradient={backgroundGradient}
            />
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={({ item }) => <Item item={item} handlePress={handlePress} selected={item.id === selectedId} />}
                keyExtractor={item => item.id}
                extraData={selectedId}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight || 0,

        // flex: 1

    },
    item: {


        marginVertical: 8,
        marginHorizontal: 16,
        width: 56,
        // flex: 1,
        // height: 100,
        borderRadius: 8,
        // shadowColor: '#01D0DE',
        // elevation: 20,

        // shadowOffset: {
        //     width: 20,
        //     height: 40,
        // },
        // shadowOpacity: 1,
        // shadowRadius: 30,


    },
    hover: {
        shadowColor: "#51B6EF",
        elevation: 20,

        shadowOffset: {
            width: 20,
            height: 40,
        },
        shadowOpacity: 1,
        shadowRadius: 30,

    },
    textShadow: {
        borderRadius: 8,

    },
    title: {
        display: 'flex',
        paddingTop: 13,
        paddingBottom: 5,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',

        fontSize: 14,
        fontFamily: 'PlusJakartaSans-Bold',
    },
    name: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        fontSize: 10,
        fontFamily: 'PlusJakartaSans-Bold',
        paddingBottom: 17
    },
    // gradient: {


    // backgroundGradient: {
    //     colors: ['#85D3FF', '#2596D7'],
    //     // start: { x: 0, y: 0 },
    //     // end: { x: 0, y: 1 },
    // },

});

export default DateList;
