import React, { useState } from 'react'
import { Image, SafeAreaView, StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';

import { login } from '../../actions/MOAuth';

import { YELLOW, WHITE, RED } from '../../utils/Colors'

const MobileOperatorLogin = ({ navigation }) => {
    const dispatch = useDispatch()

    const [username, onUsernameChange] = useState();
    const [password, onPasswordChange] = useState();

    const checkInput = () => {
        if (!username) {
            alert('Please Enter username');
            return;
        }
        //Check for the Email TextInput
        if (!password) {
            alert('Please Enter Password');
            return;
        }
        //Checked Successfully
        dispatch(login({ username, password }))
    };

    const onLoginPress = () => {
        checkInput()
    }


    return (
        <SafeAreaView style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../../../assets/images/icons/person.png')}
            />
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    onChangeText={onUsernameChange}
                    value={username}
                    placeholder="Username"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onPasswordChange}
                    secureTextEntry={true}
                    value={password}
                    placeholder="Password"
                />
                <TouchableOpacity
                    onPress={() => onLoginPress()}
                    style={styles.button}
                >
                    <Text
                        style=
                        {
                            {
                                color: WHITE
                            }
                        }>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default MobileOperatorLogin

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: YELLOW,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'

    },
    logo: {
        width: 60,
        height: 60,
    },
    form: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 50,
        width: 240,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 50,
        padding: 13,
        backgroundColor: WHITE,
        borderColor: 'transparent',
        textAlign: 'center'
    },
    button: {
        backgroundColor: RED,
        borderRadius: 30,
        color: WHITE,
        padding: 10,
        width: 120,
        fontWeight: 'bold',
        height: 45,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
})