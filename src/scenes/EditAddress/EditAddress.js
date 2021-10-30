import React, { useState } from "react"
import {
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView
} from 'react-native'
import EditAddressModal from "../../components/EditAddressModal/EditAdressModal";

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

const EditAddress = ({ navigation }) => {
    const [text, onChangeText] = useState("Useless Text");

    return (
        <SafeAreaView>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
            />
            <EditAddressModal navigation={navigation} />
        </SafeAreaView>
    )
}

export default EditAddress
