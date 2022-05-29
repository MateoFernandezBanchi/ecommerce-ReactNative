import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Styles/colors'
import { SafeAreaView } from 'react-native-safe-area-context'

const Searcher = ({children, additionalStyles}) => {
    return (
        <SafeAreaView>
        <View style={{...styles.searcherContainer, ...additionalStyles}}>
            {children}
        </View>
        </SafeAreaView>
    )
}

export default Searcher

const styles = {
    searcherContainer: {
        flexDirection: 'row',
        width: '90%',
        alignItems: 'center',
        marginVertical: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
        borderRadius: 12,
    }
}