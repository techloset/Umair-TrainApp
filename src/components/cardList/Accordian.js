import React from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    ScrollView,
    StyleSheet,
    Text,
    StatusBar,
} from 'react-native';
import CustomDropDown from './CardList';

const DATA = [
    {
        id: 1,

    },

];



const ArrowList = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={({ item }) => <CustomDropDown title={item.title} textBody={item.textBody} />}
                keyExtractor={(item) => item.id}
            />
        </View>
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