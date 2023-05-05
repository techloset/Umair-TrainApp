import React from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
} from 'react-native';
import CustomDropDown from './CardList';

const DATA = [
    {
        id: 1,

    },
    // {
    //     id: 2,
    //     title: 'Second Item',
    //     textBody: 'bshbfjhdfhjdbvjfgflgfjkj gdfhjfgdhgdfjlgmf fgyugjdbhjb gfuyryghbdbvfdhgr ugf'
    // },
    // {
    //     id: 3,
    //     title: 'Third Item',
    //     textBody: 'bshbfjhdfhjdbvjfgflgfjkj gdfhjfgdhgdfjlgmf fgyugjdbhjb gfuyryghbdbvfdhgr ugf'
    // },
];

// const Item = ({ title }) => (
//     <View style={styles.item}>
//         <Text style={styles.title}>{title}</Text>
//     </View>
// );

const ArrowList = () => {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={({ item }) => <CustomDropDown title={item.title} textBody={item.textBody} />}
                keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {

        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});

export default ArrowList;