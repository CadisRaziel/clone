import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Image,
    Dimensions,
    Platform,
    ScrollView,
    Alert
} from 'react-native'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'; //seleciona a imagem da galeria ou tira foto


class AddPhoto extends Component {
    state = {
        image: null,
        comment: '',
    }

    //quando ele clicar no botao ele vai mostar o imagePicker
    pickImage = () => {
        launchImageLibrary({
            title: 'Escolha a imagem',
            maxHeight: 600,
            maxWidth: 800,

        }, res => {
            if (!res.didCancel) {
                this.setState({ image: { uri: res.uri, base64: res.data } })
            }
        })
    }

    openCamera = () => {
        launchCamera({
            mediaType: 'photo',
            maxHeight: 600,
            maxWidth: 800,
        }, res => {
            if (!res.didCancel) {
                this.setState({ image: { uri: res.uri, base64: res.data } })
            }
        })
    }

    save = async () => {
        Alert.alert('Imagem adicionada', this.state.comment)
    }

    render() {
        return (
            <ScrollView>
                <View style={style.container}>
                    <Text style={style.title}>Compartilhe uma imagem</Text>
                    <View style={style.imageContainer}>
                        <Image source={this.state.image} style={style.image} />
                    </View>
                    <TouchableOpacity onPress={this.pickImage} style={style.button}>
                        <Text style={style.buttonText}>Escolha a foto</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.openCamera} style={style.button}>
                        <Text style={style.buttonText}>Tirar foto</Text>
                    </TouchableOpacity>
                    <TextInput
                        placeholder='Algum comentário para a foto?'
                        style={style.input}
                        value={this.state.comment}
                        onChangeText={comment => this.setState({ comment })} />
                    <TouchableOpacity onPress={this.save} style={style.button}>
                        <Text style={style.buttonText}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginTop: Platform.OS === 'ios' ? 30 : 10,
        fontWeight: 'bold'
    },
    imageContainer: {
        width: '90%',
        height: Dimensions.get('window').width / 2,
        backgroundColor: '#EEE',
        marginTop: 10
    },
    image: {
        width: '100%',
        height: Dimensions.get('window').width / 2,
        resizeMode: 'center'
    },
    button: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286F4',

    },
    buttonText: {
        fontSize: 20,
        color: '#FFF',

    },
    input: {
        marginTop: 20,
        width: '90%'
    }

})

export default AddPhoto