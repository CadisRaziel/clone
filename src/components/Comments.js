import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'


export default class Comments extends Component {
    render() {
        let view = null
        if (this.props.comments) {
            //esse map é para transformar os comentarios em jsx
            view = this.props.comments.map((item, index) => {
                return (
                    <View style={style.commentsContainer} key={index}>
                        <Text style={style.nickname}>{item.nickname}: </Text>
                        <Text style={style.comment}>{item.comment}</Text>
                    </View>
                )
            })
        }
        return (
            <View style={style.container}>
                {view}
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
    },
    commentsContainer: {
        flexDirection: 'row',
        marginTop: 5
    },
    nickname: {
        marginLeft: 5,
        fontWeight: 'bold',
        color: '#444'
    },
    comment: {
        color: '#555'
    }
})