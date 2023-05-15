import { StyleSheet, color, maskImage } from "react-native"
export const styles = StyleSheet.create({

    hover: {
        shadowColor: "#2D9CDB",
        elevation: 20,

        shadowOffset: {
            width: 20,
            height: 40,
        },
        shadowOpacity: 1,
        shadowRadius: 30,

    },
    title: {
        color: 'black'
    },
    Align: {
        display: 'flex',
        flexDirection: 'column',
        gap: 32
    }

})