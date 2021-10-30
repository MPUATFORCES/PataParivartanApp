import React from 'react'

const TableView = () => {

    const renderRow = () => {

        <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>
            <View style={{ flex: 1, alignSelf: 'stretch' }} /> { /* Edit these as they are your cells. You may even take parameters to display different data / react elements etc. */}
            <View style={{ flex: 1, alignSelf: 'stretch' }} />
            <View style={{ flex: 1, alignSelf: 'stretch' }} />
            <View style={{ flex: 1, alignSelf: 'stretch' }} />
            <View style={{ flex: 1, alignSelf: 'stretch' }} />
        </View>
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {
                data.map((datum) => { // This will render a row for each data element.
                    return this.renderRow();
                })
            }
        </View>
    )
}

export default TableView
