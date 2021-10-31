import React, { useEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import SearchableDropdown from 'react-native-searchable-dropdown';

const styles = StyleSheet.create({
    container: {

    }
});

const DropDown = ({ SetItemSelected }) => {
    const [selectedItems, setItems] = useState([]);

    const onItemSelected = (item) => {
        setItems(item)
        SetItemSelected()
    }

    var items = [
        {
            id: 1,
            name: 'Electricity Bill'
        },
        {
            id: 2,
            name: 'Water Bill'
        },
        {
            id: 3,
            name: 'Housing Tax Bill'
        },
    ];

    return (
        <View style={styles.container}>
            <SearchableDropdown
                onTextChange={(text) => console.log(text)}
                onItemSelect={(item) => {
                    onItemSelected(item)
                }}
                containerStyle={{
                    padding: 5
                }}
                textInputStyle={{
                    padding: 9,
                    borderWidth: 1,
                    borderColor: '#ccc',
                    borderRadius: 5
                }}
                itemStyle={{
                    padding: 8,
                    marginTop: 2,
                    backgroundColor: '#ddd',
                    borderColor: '#bbb',
                    borderWidth: 1,
                    borderRadius: 5
                }}
                itemTextStyle={{
                    color: '#222'
                }}
                itemsContainerStyle={{
                    maxHeight: 140
                }}
                items={items}
                placeholder={selectedItems.name ? selectedItems.name : "Select Proof of Address"}
                resetValue={false}
                underlineColorAndroid='transparent' />
        </View>
    )
}

export default DropDown