import React, { Component } from 'react'
import { FlatList, View, StyleSheet } from 'react-native'
import Header from '../components/Header'
import Post from '../components/Post'


class Feed extends Component {
    state = {
        posts: [{
            id: Math.random(),
            nickname: 'batman',
            email: 'batman@gmail.com',
            image: require('../../src/assets/img/turma.jpg'),
            comments: [{
                nickname: 'Superman',
                comment: 'Dinner with friends'
            }, {
                nickname: 'DarkSied',
                comment: 'Im coming kkkkk'
            }]
        }, {
            id: Math.random(),
            nickname: 'DarkSied',
            email: 'darksied@gmail.com',
            image: require('../../src/assets/img/darksied.jpg'),
            comments: [{
                nickname: 'Batman',
                comment: 'I will hack you jkkkkkkk'
            }, {
                nickname: 'Desaad',
                comment: 'My master is beautiful'
            }]
        }]
    }

    render() {
        return (
            <View style={style.container}>
                <Header />
                <FlatList
                    data={this.state.posts}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item }) =>
                        <Post key={item.id} {...item} />} />
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
})

export default Feed