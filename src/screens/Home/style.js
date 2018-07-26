import React from 'react'
import { StyleSheet } from 'react-native';

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        backgroundColor: '#fff',
    },
    cardStyle: {
        flex: 1,
        width: '100%',
        height: 200,
        padding: 5,
        marginBottom: 5,

        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.75,
        shadowRadius: 2,
        elevation: 1,
        marginTop: 10,
    },
    flatstyle: {
        width: 300,
        marginTop:20,
        marginBottom: 20,
    },
    title: {
        width: '100%',
        height: 30,
    },
    ImageStye: {
        marginBottom: 5,
        marginTop: 5,
    },
    describe: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        height: 20,
    }
})

export default styles