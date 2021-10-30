import React from 'react'
import { View, Image, StyleSheet, Text } from 'react-native'

import { RED, WHITE } from '../../utils/Colors'

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 75,
        backgroundColor: WHITE,
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    logo: {
        width: 100,
        height: 69,
    },
    headerText: {
        color: RED,
        fontWeight: 'bold',
        fontSize: 26
    }
});

const Navbar = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>
                PATA PARIVARTAN
            </Text>
        </View>
    )
}

export default Navbar
