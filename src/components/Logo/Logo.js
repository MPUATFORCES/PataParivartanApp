import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    logo: {
        width: 100,
        height: 60,
    },
});


const Logo = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../../../assets/images/logo/logo.png')}
            />
        </View>
    )
}

export default Logo