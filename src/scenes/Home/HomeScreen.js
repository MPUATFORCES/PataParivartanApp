import React from 'react'
import {
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity
} from 'react-native'

import Navbar from '../../components/Navbar/Navbar';
import { YELLOW, WHITE, RED } from '../../utils/Colors'

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: YELLOW,
        display: 'flex',
        alignItems: 'center',

    },
    button: {
        backgroundColor: RED,
        borderRadius: 30,
        color: WHITE,
        padding: 10,
        width: 150,
        fontWeight: 'bold',
        height: 45,
        margin: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

const HomeScreen = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.container}>
            <Navbar />
            <TouchableOpacity
                onPress={() => navigation.navigate("Customer Login")}
                style={styles.button}
            >
                <Text
                    style=
                    {
                        {
                            color: WHITE
                        }
                    }>
                    Update Address
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default HomeScreen
