import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'


class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    login = () => {
        this.props.navigation.navigate('Profile') //para navegar até a tela Profile
    }

    render() {
        return (
            <View style={style.container}>
                <TextInput
                    placeholder='Email'
                    style={style.input}
                    autoFocus={true}
                    keyboardType='email-address'
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })} />
                <TextInput
                    placeholder='Senha'
                    style={style.input}
                    secureTextEntry={true}
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })} />

                <TouchableOpacity onPress={this.login} style={style.button}>
                    <Text style={style.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { }} style={style.button}>
                    <Text style={style.buttonText}>Criar nova conta</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        marginTop: 20,
        width: '90%',
        backgroundColor: '#EEE',
        height: 40,
        borderWidth: 1,
        borderColor: '#333'
    },
    button: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4'
    },
    buttonText: {
        fontSize: 20,
        color: '#FFF'
    }

})

export default Login