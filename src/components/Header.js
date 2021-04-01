import React, { Component } from 'react'
import { StyleSheet, Text, View, Platform, Image } from 'react-native'
import icon from '../assets/img/batman.png'

export default class Header extends Component {
    render() {
        return (
            <View style={style.container}>
                <View style={style.rowContainer}>
                    <Image source={icon} style={style.image} />
                    <Text style={style.title}>Batman memories</Text>
                </View>
            </View>
        )
    }
}


const style = StyleSheet.create({
    container: {
        display: 'flex',
        marginTop: Platform.OS === 'ios' ? 20 : 0,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#BBB',
        width: '100%'
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        height: 30,
        width: 75,
        resizeMode: 'contain'
    },
    title: {
        color: '#000',
        fontFamily: 'DancingScript-Bold',
        height: 46,
        fontSize: 32,
        marginLeft: 5
    }
})