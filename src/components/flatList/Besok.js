import { View, Pressable, Text, StyleSheet } from 'react-native'
const Besok = (props) => {
    return (

        <View style={styles.shadow}>
            <Pressable style={{
                backgroundColor: props.backgroundColor, width: props.width, height: 26, borderRadius: 8, justifyContent: 'center', shadowColor: "#FE9B4B",
                shadowOffset: {
                    width: 0,
                    height: 18,
                },
                shadowOpacity: 5,
                shadowRadius: 20.00,
                elevation: 20
            }}>
                <Text style={[styles.box, { color: props.color }]}>{props.name}</Text>
            </Pressable>
        </View>
    )

}
const styles = StyleSheet.create({
    box: {

        fontSize: 12, fontFamily: 'PlusJakartaSans-Bold',
        alignSelf: 'center', marginBottom: 4
    },
    shadow: {
        shadowColor: "#ed0f0f",
        shadowOffset: {
            width: 0,
            height: 18,
        },
        shadowOpacity: 0.25,
        shadowRadius: 20.00,
        elevation: 24
    },
})
export default Besok