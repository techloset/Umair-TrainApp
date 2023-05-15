import { View, Pressable, Text, StyleSheet } from 'react-native'
const Besok = (props) => {
    return (

        <View style={styles.shadow}>
            <Pressable style={props.style}>
                <Text style={[props.style, { fontSize: 10, fontFamily: 'PlusJakartaSans-Bold' }]}>{props.name}</Text>
            </Pressable>
        </View>
    )

}
const styles = StyleSheet.create({
    box: {

        fontSize: 12, fontFamily: 'PlusJakartaSans-Bold',
        alignSelf: 'center', marginBottom: 4
    }

})
export default Besok